package main

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"os"
	"time"

	"go.mongodb.org/mongo-driver/bson"
	"go.mongodb.org/mongo-driver/mongo"
	"go.mongodb.org/mongo-driver/mongo/options"

	"github.com/aws/aws-lambda-go/events"
	"github.com/aws/aws-lambda-go/lambda"
)

type Question struct {
	Bird string `json:"bird" bson:"bird"`
	Answer string `json:"answer" bson:"answer"`
	AnswerOptions []string `json:"answer_options" bson:"answer_options"`
}

func handler(request events.APIGatewayProxyRequest) (*events.APIGatewayProxyResponse, error) {

	ctx, cancel := context.WithTimeout(context.Background(), 1*time.Second)
	defer cancel()

	questions, err := readQuestions(ctx)
	if err != nil {
		return &events.APIGatewayProxyResponse{
			StatusCode:        500,
			Headers:           map[string]string{"Content-Type": "text/json"},
			Body:              "Internal error",
		}, nil
	}

	if len(questions) == 0 {
		return &events.APIGatewayProxyResponse{
			StatusCode:        404,
			Headers:           map[string]string{"Content-Type": "text/json"},
			Body:              "No questions",
		}, nil
	}

	b, err := json.Marshal(questions)
	if err != nil {
		return &events.APIGatewayProxyResponse{
			StatusCode:        500,
			Headers:           map[string]string{"Content-Type": "text/json"},
			Body:              "Internal error",
		}, nil
	}

  return &events.APIGatewayProxyResponse{
    StatusCode:        200,
    Headers:           map[string]string{"Content-Type": "text/json"},
    Body:              string(b),
  }, nil
}

func main() {
  // Make the handler available for Remote Procedure Call
  lambda.Start(handler)
}

func readQuestions(ctx context.Context) ([]Question, error) {
	uri := os.Getenv("MG_URL")
	if uri == "" {
		log.Fatal("Cannot find 'MG_URL' environmental variable.")
	}
	db:= os.Getenv("MG_DB")
	if uri == "" {
		log.Fatal("Cannot find 'MG_DB' environmental variable.")
	}

	client, err := mongo.Connect(ctx, options.Client().ApplyURI(uri))
	if err != nil {
		return nil, err
	}
	defer func() {
		if err := client.Disconnect(ctx); err != nil {
			log.Fatalf("Failed to disconnect from db: %s", err)
		}
	}()

	coll := client.Database(db).Collection("birds")
	cur, err := coll.Find(ctx, bson.D{})
	if err != nil { 
		return nil, err
	}
	defer cur.Close(ctx)

	var questions []Question
	if err = cur.All(ctx, &questions); err != nil {
		return nil, fmt.Errorf("failed to read all records from cursor: %s", err)
	}
	
	return questions, nil
}
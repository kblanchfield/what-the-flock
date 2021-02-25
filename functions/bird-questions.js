const MongoClient = require('mongodb').MongoClient
const { MG_URL, MG_DB } = process.env

exports.handler = async (event, context) => {
    context.callbackWaitsForEmptyEventLoop = false

    try {
        const client = new MongoClient(MG_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        await client.connect()
        console.log("Connected to db")

        const db = client.db(MG_DB)
        const Bird = db.collection('birds')

        const birdQuestions = await Bird.find()
            .project({ bird: 1, answer: 1, answer_options: 1, _id: 0 })
            .toArray()
        client.close()
    
        return {
            statusCode: 200,
            body: JSON.stringify({ birdQuestions })
        }
    }
    catch (err) {
        console.log("Error getting bird questions from db: ", err)
        return {
            statusCode: 500,
            body: JSON.stringify({ error: err })
        }
    }
}
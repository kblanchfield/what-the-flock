import React from "react"
import Question from "./question"
import Answer from "./answer"

function Quiz(props) {
    return (
      <div className="game-container">
        <div className="question">
          <Question revealedAnswer={props.revealedAnswer} bird={props.bird} />
        </div>
        <div className="answer">
          <div className="answer-list">
            {props.answerOptions.map((option) => {
              return <Answer content={option} onAnswerSelected={props.onAnswerSelected} />
            })}
          </div>
          <h4>Next <i class="fas fa-angle-right fa-x2" onClick={props.setNextQuestion}></i></h4>
        </div>
      </div>
    )
}

export default Quiz

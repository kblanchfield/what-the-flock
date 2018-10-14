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
          <div className="navigation">
            <h4 className="previous-question" onClick={props.onPreviousQuestion}><i className="fas fa-angle-left"></i> Back</h4>
            <h4 className="next-question" onClick={props.onNextQuestion}>Next <i className="fas fa-angle-right"></i></h4>
          </div>
        </div>
      </div>
    )
}

export default Quiz

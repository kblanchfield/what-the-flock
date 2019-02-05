import React from "react"
import PropTypes from "prop-types"
import Question from "../question/question"
import Answer from "../answer/answer"
import Navigation from "../navigation/navigation"
import "./quiz.scss"

const Quiz = ({ revealedAnswer, bird, answerOptions, onAnswerSelected, onPreviousQuestion, onNextQuestion }) => {
    return (
      <div className="game-container">
        <div className="question">
          <Question revealedAnswer={revealedAnswer} bird={bird} />
        </div>
        <div className="answer">
          <div className="answer-list">
            {answerOptions.map((option, index) => {
              return <Answer key={index} content={option} onAnswerSelected={onAnswerSelected} />
            })}
          </div>
          <Navigation onPreviousQuestion={onPreviousQuestion} onNextQuestion={onNextQuestion} />
        </div>
      </div>
    )
}

Quiz.PropTypes = {
  revealedAnswer: PropTypes.string.isRequired,
  bird: PropTypes.string.isRequired,
  answerOptions: PropTypes.array.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onPreviousQuestion: PropTypes.func.isRequired,
  onNextQuestion: PropTypes.func.isRequired
}


export default Quiz

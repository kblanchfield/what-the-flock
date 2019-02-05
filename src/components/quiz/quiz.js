import React from "react"
import PropTypes from "prop-types"
import Question from "../question/question"
import Answer from "../answer/answer"
import Navigation from "../navigation/navigation"
import { quizQuestions } from "../../data"
import "./quiz.scss"

const Quiz = ({ revealedAnswer, counter, onAnswerSelected, onPreviousQuestion, onNextQuestion }) => {

  const shuffle = require("shuffle-array"),
    answerOptions = [...quizQuestions[counter].answerOptions, quizQuestions[counter].answer]

    return (
      <div className="game-container">
        <div className="question">
          <Question revealedAnswer={revealedAnswer} bird={quizQuestions[counter].bird} />
        </div>
        <div className="answer">
          <div className="answer-list">
            {shuffle(answerOptions).map((option, index) => {
              return <Answer key={index} content={option} onAnswerSelected={onAnswerSelected} />
            })}
          </div>
          <Navigation onPreviousQuestion={onPreviousQuestion} onNextQuestion={onNextQuestion} />
        </div>
      </div>
    )
}

Quiz.propTypes = {
  revealedAnswer: PropTypes.string.isRequired,
  counter: PropTypes.number.isRequired,
  onAnswerSelected: PropTypes.func.isRequired,
  onPreviousQuestion: PropTypes.func.isRequired,
  onNextQuestion: PropTypes.func.isRequired
}


export default Quiz

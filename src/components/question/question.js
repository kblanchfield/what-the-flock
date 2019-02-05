import React from "react"
import PropTypes from "prop-types"
import "./question.scss"

const Question = ({ revealedAnswer, bird }) => {
  return (
    <div className="question-title">
      <h2>
        A <span className="revealed-answer">{revealedAnswer}</span>
        <br />
        of {bird}
      </h2>
    </div>
  )
}

Question.propTypes = {
   revealedAnswer: PropTypes.string.isRequired,
   bird: PropTypes.string.isRequired
 }

export default Question

import React from "react"
import PropTypes from "prop-types"
import "./answer.scss"

const Answer = ({ content, onAnswerSelected }) => {

  return (
      <div className="answer-option">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          id={content}
          value={content}
          onClick={onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={content}>
          {content}
        </label>
      </div>
  )
}

Answer.propTypes = {
   content: PropTypes.string.isRequired,
   onAnswerSelected: PropTypes.func.isRequired
 }

export default Answer

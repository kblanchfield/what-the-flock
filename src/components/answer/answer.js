import React, { useContext } from "react"
import PropTypes from "prop-types"
import { questionContext } from "../../contexts/question-context"
import "./answer.scss"

const Answer = ({ correct, answerOption }) => {

  const { questionIndex, updateQuestionIndex, updateQuestionAnsweredCorrectly } = useContext(questionContext)

  const onAnswerSelected = async () => {
    if (correct) {
      updateQuestionAnsweredCorrectly(true)
      await new Promise(resolve => {
        setTimeout(() => { resolve() }, 1500)
      })
      updateQuestionIndex(questionIndex + 1)
    }
  }

  return (
      <div className="answer-option">
        <input
          type="radio"
          className="radioCustomButton"
          name="radioGroup"
          id={answerOption}
          value={answerOption}
          onClick={onAnswerSelected}
        />
        <label className="radioCustomLabel" htmlFor={answerOption}>
          {answerOption}
        </label>
      </div>
  )
}

Answer.propTypes = {
  answerOption: PropTypes.string.isRequired
 }

export default Answer

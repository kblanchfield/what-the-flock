import React, { useContext } from "react"
import PropTypes from "prop-types"
import { questionContext } from "../../contexts/question-context"
import "./answer.scss"

const Answer = ({ correct, answerOption, numQuestions }: { 
  correct: boolean,
  answerOption: string,
  numQuestions: number
}) => {

  const { questionIndex, updateQuestionIndex, updateQuestionAnsweredCorrectly } = useContext(questionContext)

  const onAnswerSelected = async () => {
    if (!correct) {
      return
    }

    updateQuestionAnsweredCorrectly(true)

    await new Promise<void>((resolve) => {
      setTimeout(() => { resolve() }, 1500)
    })
    updateQuestionAnsweredCorrectly(false)
    updateQuestionIndex(questionIndex + 1)
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
          <h2>{answerOption}</h2>
        </label>
      </div>
  )
}

Answer.propTypes = {
  answerOption: PropTypes.string.isRequired
 }

export default Answer

import React, { useContext } from "react"
import { questionContext } from "../../contexts/question-context"
import { quizQuestions } from "../../data"
import "./navigation.scss"

const Navigation = () => {

  const { questionIndex, updateQuestionIndex } = useContext(questionContext)

  const onNextQuestion = () => {
    if (questionIndex < quizQuestions.length - 1) {
      updateQuestionIndex(questionIndex + 1)
    }
  }

  const onPreviousQuestion = () => {
    if (questionIndex > 0) {
      updateQuestionIndex(questionIndex - 1)
    }
  }

  return (
    <div className="navigation">
    <h4 className="previous-question" onClick={onPreviousQuestion}><i className="fas fa-angle-left"></i> Back</h4>
    <h4 className="next-question" onClick={onNextQuestion}>Next <i className="fas fa-angle-right"></i></h4>
    </div>
  )
}

export default Navigation
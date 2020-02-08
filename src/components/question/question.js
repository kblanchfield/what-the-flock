import React, { useState, useEffect, useContext } from "react"
import { questionContext } from "../../contexts/question-context"
import { quizQuestions } from "../../data"
import "./question.scss"

const Question = () => {

  const { questionIndex, questionAnsweredCorrectly } = useContext(questionContext)

  const [bird, setBird] = useState('')

  useEffect(() => {
    if (questionIndex < quizQuestions.length) {
      setRevealedAnswer('_______')
      setBird(quizQuestions[questionIndex].bird)
    }
  }, [questionIndex])

  const [revealedAnswer, setRevealedAnswer] = useState('')

  useEffect(() => {
    if (questionAnsweredCorrectly === true) {
      setRevealedAnswer(quizQuestions[questionIndex].answer)
    }
  }, [questionAnsweredCorrectly])

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

export default Question
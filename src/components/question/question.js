import React, { useState, useEffect, useContext } from "react"
import { questionContext } from "../../contexts/question-context"
import "./question.scss"

const Question = ({ bird, answer }) => {

  const { questionAnsweredCorrectly } = useContext(questionContext)
  const [revealedAnswer, setRevealedAnswer] = useState('______')

  useEffect(() => {
    if (questionAnsweredCorrectly === true) {
      setRevealedAnswer(answer)
    } else {
      setRevealedAnswer('______')
    }
  }, [answer, questionAnsweredCorrectly])

  return (
    <div className="question-title">
      <h2>A <span className="revealed-answer">{revealedAnswer}</span></h2>
      <br />
      <h2>of {bird}</h2>
    </div>
  )
}

export default Question
import React, { useState, useEffect, useContext } from "react"
import Question from "../question/question"
import Answer from "../answer/answer"
import Navigation from "../navigation/navigation"
import { questionContext } from "../../contexts/question-context"
import { quizQuestions } from "../../data"
import { shuffle } from "../../utils/shuffle"
import "./quiz.scss"


const Quiz = () => {

  const { questionIndex, updateQuestionAnsweredCorrectly } = useContext(questionContext)

  const [answerOptions, setAnswerOptions] = useState([...quizQuestions[0].answerOptions, quizQuestions[0].answer])

  useEffect(() => {
    if (questionIndex === quizQuestions.length) {
      alert("Game over.")
    } else {
      let shuffledAnswerOptions = []
      try {
        shuffledAnswerOptions = shuffle([...quizQuestions[questionIndex].answerOptions, quizQuestions[questionIndex].answer])
      }
      catch (e) {
        console.log("Error shuffling answer options: ", e)
      }
      setAnswerOptions(shuffledAnswerOptions)
      updateQuestionAnsweredCorrectly(false)
    }
  }, [questionIndex])

  return (
    <div className="game-container">
      <div className="question">
        <Question />
      </div>
      <div className="answer">
        <div className="answer-list">
          {answerOptions.map(answerOption => {
            return <Answer key={answerOption} answerOption={answerOption} />
          })}
        </div>
        <Navigation />
      </div>
    </div>
  )
}

export default Quiz
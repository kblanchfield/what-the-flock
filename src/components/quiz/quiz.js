import React, { useState, useEffect } from "react"
import Question from "../question/question"
import Answer from "../answer/answer"
import Navigation from "../navigation/navigation"
import { quizQuestions } from "../../data"
import { shuffle } from "../../utils/shuffle"
import "./quiz.scss"


const Quiz = () => {

  const [questionIndex, setQuestionIndex] = useState(0)
  const [revealedAnswer, setRevealedAnswer] = useState('_______')
  const [answerOptions, setAnswerOptions] = useState([...quizQuestions[0].answerOptions, quizQuestions[0].answer])

  const onAnswerSelected = async (event) => {
    if (event.target.value === quizQuestions[questionIndex].answer) {
      setRevealedAnswer(quizQuestions[questionIndex].answer)
      await new Promise(resolve => {
        setTimeout(() => { resolve() }, 1500)
      })
      setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)
    }
  }

  useEffect(() => {
    setRevealedAnswer('_______')
    let shuffledAnswerOptions = []
    try {
      shuffledAnswerOptions = shuffle([...quizQuestions[questionIndex].answerOptions, quizQuestions[questionIndex].answer])
    }
    catch (e) {
      console.log("Error shuffling answer options: ", e)
    }
    setAnswerOptions(shuffledAnswerOptions)
  }, [questionIndex])


  const onNextQuestion = () => {
    if (questionIndex < quizQuestions.length - 1) {
      setQuestionIndex(prevQuestionIndex => prevQuestionIndex + 1)
    }
  }

  const onPreviousQuestion = () => {
    if (questionIndex > 0) {
      setQuestionIndex(prevQuestionIndex => prevQuestionIndex - 1)
    }
  }

    return (
      <div className="game-container">
        <div className="question">
          <Question revealedAnswer={revealedAnswer} bird={quizQuestions[questionIndex].bird} />
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

export default Quiz
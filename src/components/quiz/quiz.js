import React, { useState, useEffect, useContext } from "react"
import Question from "../question/question"
import Answer from "../answer/answer"
import Navigation from "../navigation/navigation"
import { questionContext } from "../../contexts/question-context"
import { fetchQuestions } from "../../service/bird-questions"
import { shuffle } from "../../utils/shuffle"
import "./quiz.scss"


const Quiz = () => {

  const { questionIndex } = useContext(questionContext)
  
  const [quizQuestions, setQuizQuestions] = useState([])
  const [bird, setBird] = useState('')
  const [answer, setAnswer] = useState('')
  const [answerOptions, setAnswerOptions] = useState([])

  useEffect(() => {
    const getQuestions = async () => {
      try {
        const quizQuestions = await fetchQuestions()
        setQuizQuestions(quizQuestions)
      } catch (err) {
        console.log('Error setting quiz questions: ', err)
      }
    }
    getQuestions()
  }, [])

  useEffect(() => {
    if (quizQuestions.length === 0) {
      return
    }

    if (questionIndex === quizQuestions.length) {
      alert("Game over.")
      return
    }

    let shuffledAnswerOptions = []
    try {
      shuffledAnswerOptions = shuffle([...quizQuestions[questionIndex]?.answerOptions, quizQuestions[questionIndex]?.answer])
    }
    catch (e) {
      console.log("Error shuffling answer options: ", e)
    }
    setAnswerOptions(shuffledAnswerOptions)
    setBird(quizQuestions[questionIndex]?.bird)
    setAnswer(quizQuestions[questionIndex]?.answer)
  }, [quizQuestions, questionIndex])

  return (
    <div className="game-container">
      <div className="question">
        <Question bird={bird} answer={answer} />
      </div>
      <div className="answer">
        <div className="answer-list">
          {answerOptions.map(answerOption => {
            return <Answer key={answerOption} correct={answerOption === answer} answerOption={answerOption} />
          })}
        </div>
        <Navigation numQuestions={quizQuestions.length} />
      </div>
    </div>
  )
}

export default Quiz
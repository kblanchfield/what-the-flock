import React, { useState, useEffect, useContext } from "react"
import Question from "../question/question"
import Answer from "../answer/answer"
import Navigation from "../navigation/navigation"
import { questionContext } from "../../contexts/question-context"
import { fetchQuestions } from "../../service/bird-questions"
import { shuffle } from "../../utils/shuffle"
import "./quiz.scss"
import { IQuestion } from "../../models"


const Quiz = () => {

  const { questionIndex } = useContext(questionContext)
  
  const [quizQuestions, setQuizQuestions] = useState<IQuestion[]>([])
  const [bird, setBird] = useState<string>('')
  const [answer, setAnswer] = useState<string>('')
  const [answerOptions, setAnswerOptions] = useState<string[]>([])

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

    try {
      const shuffledAnswerOptions = shuffle([...quizQuestions[questionIndex]?.answerOptions, quizQuestions[questionIndex]?.answer])
      setAnswerOptions(shuffledAnswerOptions)
    } catch (err) {
      console.log('Error shuffling answer options: ', err)
    }
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
            return <Answer key={answerOption} correct={answerOption === answer} answerOption={answerOption} numQuestions={quizQuestions.length} />
          })}
        </div>
        <Navigation numQuestions={quizQuestions.length} />
      </div>
    </div>
  )
}

export default Quiz
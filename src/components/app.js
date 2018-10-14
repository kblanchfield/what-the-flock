import React from "react"
import { quizQuestions } from "../data"
import Quiz from "./quiz"

class App extends React.Component {

  state = {
    counter: 0,
    question: "",
    revealedAnswer: "_______",
    answer: "",
    answerOptions: []
  }

  componentWillMount() {
    const shuffle = require('shuffle-array'),
      answerOptions = [...quizQuestions[0].answerOptions, quizQuestions[0].answer]
    this.setState({
      question: quizQuestions[0].bird,
      answer: quizQuestions[0].answer,
      answerOptions: shuffle(answerOptions)
    })
  }

  handleAnswerSelected = (event) => {
    if (this.state.answer === event.target.value) {
      this.setState({
        revealedAnswer: this.state.answer
      })
    }
  }

  setNextQuestion = () => {
    if (this.state.counter < quizQuestions.length - 1) {
      const counter = this.state.counter + 1
      const questionId = this.state.questionId + 1
      const shuffle = require('shuffle-array'),
        answerOptions = [...quizQuestions[counter].answerOptions, quizQuestions[counter].answer]
      this.setState({
        counter: counter,
        question: quizQuestions[counter].bird,
        revealedAnswer: "_______",
        answer: quizQuestions[counter].answer,
        answerOptions: shuffle(answerOptions)
      })
    }
  }

  setPreviousQuestion = () => {
    if (this.state.counter > 0) {
      const counter = this.state.counter - 1
      const questionId = this.state.questionId - 1
      const shuffle = require('shuffle-array'),
        answerOptions = [...quizQuestions[counter].answerOptions, quizQuestions[counter].answer]
      this.setState({
        counter: counter,
        question: quizQuestions[counter].bird,
        revealedAnswer: "_______",
        answer: quizQuestions[counter].answer,
        answerOptions: shuffle(answerOptions)
      })
    }
  }

  render() {
    return (
      <Quiz
        revealedAnswer={this.state.revealedAnswer}
        bird={this.state.question}
        answerOptions={this.state.answerOptions}
        onAnswerSelected={this.handleAnswerSelected}
        onPreviousQuestion={this.setPreviousQuestion}
        onNextQuestion={this.setNextQuestion} />
    )
  }

}

export default App

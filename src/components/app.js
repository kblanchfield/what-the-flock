import React from "react"
import { quizQuestions } from "../data"
import Quiz from "./quiz/quiz"

const shuffle = require("shuffle-array")

class App extends React.Component {

  state = {
    counter: 0,
    revealedAnswer: "_______",
    answerOptions: shuffle([...quizQuestions[0].answerOptions, quizQuestions[0].answer])
  }

  handleAnswerSelected = event => {
    if (event.target.value === quizQuestions[this.state.counter].answer) {
      this.setState({
        revealedAnswer: quizQuestions[this.state.counter].answer
      }, () =>
        setTimeout(() => {this.setNextQuestion()}, 1500)
      )
    }
  }

  

  setNextQuestion = () => {
    if (this.state.counter < quizQuestions.length - 1) {
      const counter = this.state.counter + 1
      const answerOptions = shuffle([...quizQuestions[counter].answerOptions, quizQuestions[counter].answer])
      this.setState({
        counter,
        revealedAnswer: "_______",
        answerOptions
      })
    }
  }

  setPreviousQuestion = () => {
    if (this.state.counter > 0) {
      const counter = this.state.counter - 1
      const answerOptions = shuffle([...quizQuestions[counter].answerOptions, quizQuestions[counter].answer])
      this.setState({
        counter,
        revealedAnswer: "_______",
        answerOptions
      })
    }
  }

  render() {
    return (
      <Quiz
        counter={this.state.counter}
        answerOptions={this.state.answerOptions}
        revealedAnswer={this.state.revealedAnswer}
        onAnswerSelected={this.handleAnswerSelected}
        onPreviousQuestion={this.setPreviousQuestion}
        onNextQuestion={this.setNextQuestion} />
    )
  }

}

export default App

import React from "react"
import { quizQuestions } from "../data"
import Quiz from "./quiz/quiz"

class App extends React.Component {

  state = {
    counter: 0,
    revealedAnswer: "_______",
  }

  handleAnswerSelected = event => {
    if (event.target.value === quizQuestions[this.state.counter].answer) {
      this.setState({
        revealedAnswer: quizQuestions[this.state.counter].answer
      }, () => this.setNextQuestion()
      )
    }
  }

  setNextQuestion = () => {
    if (this.state.counter < quizQuestions.length - 1) {
      const counter = this.state.counter + 1
      this.setState({
        counter: counter,
        revealedAnswer: "_______",
      })
    }
  }

  setPreviousQuestion = () => {
    if (this.state.counter > 0) {
      const counter = this.state.counter - 1
      this.setState({
        counter: counter,
        revealedAnswer: "_______",
      })
    }
  }

  render() {
    return (
      <Quiz
        counter={this.state.counter}
        revealedAnswer={this.state.revealedAnswer}
        onAnswerSelected={this.handleAnswerSelected}
        onPreviousQuestion={this.setPreviousQuestion}
        onNextQuestion={this.setNextQuestion} />
    )
  }

}

export default App

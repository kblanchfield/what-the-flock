import React from "react"
import Quiz from "./quiz/quiz"
import QuestionContextProvider from "../contexts/question-context"

const App = () => {

  return (
    <QuestionContextProvider>
      <Quiz />
    </QuestionContextProvider>
  )
}

export default App
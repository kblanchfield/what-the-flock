import { apiRequest } from "./fetch"
import { IQuestion } from "../models"

const mapQuestions = (questions: any[]): IQuestion[] => {
  return questions.map((question: any): IQuestion => {
    return {
      answer: question.answer,
      answerOptions: question.answer_options,
      bird: question.bird,
    }
  })
}

export const fetchQuestions = async (): Promise<IQuestion[]> => {
  try {
    const response = await apiRequest("/.netlify/functions/questions/", "get")

    return mapQuestions(response)
  } catch (err) {
    console.log("Error getting bird questions: ", err)
    return []
  }
}

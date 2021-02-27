import { IQuestion } from "../models"

export const apiRequest = async (url: string, method: string): Promise<{ birdQuestions: IQuestion[] }> => {
    const response = await fetch(url, {
      method,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
      }
    })
    return response.json()
  }
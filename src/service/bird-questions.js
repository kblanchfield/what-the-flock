import { apiRequest } from './fetch'

const mapQuestions = (questions) => {
    return questions.map((question) => {
        return {
            answer: question.answer,
            answerOptions: question.answer_options,
            bird: question.bird,
        }
    })
}

export const fetchQuestions = async () => {
    try {
        const response = await apiRequest(
            "/.netlify/functions/bird-questions/",
            "get"
        )

        return mapQuestions(response.birdQuestions)
    } catch (err) {
        console.log('Error getting bird questions: ', err)
        return []
    }
}
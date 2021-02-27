import React, { createContext } from 'react'
import useQuestionHandler from '../utils/question-hooks'

export const questionContext = createContext({
    questionIndex: 0,
    questionAnsweredCorrectly: false,
    updateQuestionIndex: (index: number) => {},
    updateQuestionAnsweredCorrectly: (questionAnsweredCorrectly: boolean) => {}
})

const { Provider } = questionContext

const QuestionProvider = ({ children }: any) => {
    const { questionIndex, questionAnsweredCorrectly, updateQuestionIndex, updateQuestionAnsweredCorrectly } = useQuestionHandler()

    return (
        <Provider value={{questionIndex, questionAnsweredCorrectly, updateQuestionIndex, updateQuestionAnsweredCorrectly}}>
            {children}
        </Provider>
    )
}

export default QuestionProvider
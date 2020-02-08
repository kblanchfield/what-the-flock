import React, { createContext } from 'react'
import useQuestionHandler from '../utils/question-hooks'

export const questionContext = createContext({
    questionIndex: 0,
    questionAnsweredCorrectly: false,
    updateQuestionIndex: () => {},
    updateQuestionAnsweredCorrectly: () => {}
})

const { Provider } = questionContext

const QuestionProvider = ({ children }) => {
    const { questionIndex, questionAnsweredCorrectly, updateQuestionIndex, updateQuestionAnsweredCorrectly } = useQuestionHandler()

    return (
        <Provider value={{questionIndex, questionAnsweredCorrectly, updateQuestionIndex, updateQuestionAnsweredCorrectly}}>
            {children}
        </Provider>
    )
}

export default QuestionProvider
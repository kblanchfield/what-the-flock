import React, { createContext } from 'react'
import useQuestionHandler from '../utils/question-hooks'

export const questionContext = createContext({
    questionIndex: 0,
    questionAnsweredCorrectly: false,
    updateQuestionIndex: () => {},
    updatequestionAnsweredCorrectly: () => {}
})

const { Provider } = questionContext

const QuestionProvider = ({ children }) => {
    const { questionIndex, questionAnsweredCorrectly, updateQuestionIndex, updatequestionAnsweredCorrectly } = useQuestionHandler()

    return (
        <Provider value={{questionIndex, questionAnsweredCorrectly, updateQuestionIndex, updatequestionAnsweredCorrectly}}>
            {children}
        </Provider>
    )
}

export default QuestionProvider
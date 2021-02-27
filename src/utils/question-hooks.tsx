import { useState, useCallback } from 'react'

const useQuestionHandler = (): {
    questionIndex: number,
    questionAnsweredCorrectly: boolean,
    updateQuestionIndex: (index: number) => void,
    updateQuestionAnsweredCorrectly: (questionAnsweredCorrectly: boolean) => void,
} => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false)

    const updateQuestionIndex = useCallback((index: number) => {
        setQuestionIndex(index)
    }, [])

    const updateQuestionAnsweredCorrectly = useCallback((questionAnsweredCorrectly: boolean) => {
        setQuestionAnsweredCorrectly(questionAnsweredCorrectly)
    }, [])

    return {
        questionIndex,
        questionAnsweredCorrectly,
        updateQuestionIndex,
        updateQuestionAnsweredCorrectly
    }
}

export default useQuestionHandler
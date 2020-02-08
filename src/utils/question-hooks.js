import { useState, useCallback } from 'react'

const useQuestionHandler = () => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false)

    const updateQuestionIndex = useCallback(index => {
        setQuestionIndex(index)
    }, [])

    const updateQuestionAnsweredCorrectly = useCallback(bool => {
        setQuestionAnsweredCorrectly(bool)
    }, [])

    return {
        questionIndex,
        questionAnsweredCorrectly,
        updateQuestionIndex,
        updateQuestionAnsweredCorrectly
    }
}

export default useQuestionHandler
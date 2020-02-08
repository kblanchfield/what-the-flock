import { useState, useCallback } from 'react'

const useQuestionHandler = () => {
    const [questionIndex, setQuestionIndex] = useState(0)
    const [questionAnsweredCorrectly, setQuestionAnsweredCorrectly] = useState(false)

    const updateQuestionIndex = useCallback(index => {
        setQuestionIndex(index)
        console.log("set question index")
    }, [])

    const updatequestionAnsweredCorrectly = useCallback(bool => {
        setQuestionAnsweredCorrectly(bool)
        console.log("set correct answer")
    }, [])

    return {
        questionIndex,
        questionAnsweredCorrectly,
        updateQuestionIndex,
        updatequestionAnsweredCorrectly
    }
}

export default useQuestionHandler
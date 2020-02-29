export default answerQuestion = (question, answer) => {
    return {
        type: "ANSWER",
        payload: {
            question,
            answer
        }

    }
}
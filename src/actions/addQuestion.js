export const addQuestion = (question = "", answers = []) => {
    return {
        type: 'ADD_QUESTION',
        payload: {
            question,
            answers
        }
    }
}
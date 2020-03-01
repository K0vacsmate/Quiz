export const addQuestion = (title = "", answers = []) => {
    return {
        type: 'ADD_QUESTION',
        payload: {
            title,
            answers
        }
    }
}
const questionReducer = (questions = [], answered = [], action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return [...questions, action.payload];
        case 'REMOVE_QUESTION':
            return questions.filter(question => question !== action.payload);
        case 'ANSWER':
            const question = questions.filter(question => question === action.payload.question);
            const newQuestions = questions.filter(question => question !== action.payload);
            return newQuestions, [...answered, question];
    }
}
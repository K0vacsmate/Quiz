const questionReducer = (questions = [], action) => {
    switch (action.type) {
        case 'ADD_QUESTION':
            return [...questions, action.payload];
        case 'REMOVE_QUESTION':
            return questions.filter(question => question !== action.payload);

    }
}
import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addQuestion } from './actions/addQuestion';

const QuestionPage = () => {
    const [question, seQuestion] = useState("");
    const [answers, setAnswers] = useState([
        { name: 0, value: "" },
        { name: 1, value: "" },
        { name: 2, value: "" },
        { name: 3, value: "" }
    ])
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(addQuestion(question, answers));
        event.preventDefault();
    }

    const handleQuestionChange = (event) => {
        seQuestion(event.target.value);
    }

    const handleAnswerChange = (event) => {
        setAnswers({ [event.target.name]: event.target.value });
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter the question:
                <input type="text" name="question" value={question} onChange={handleQuestionChange} />
            </label>
            <div>
                {answers.map(answer => (
                    <input
                        type="text"
                        name={answer.name}
                        placeholder={answer.name !== 0 ? 'Wrong answer' : 'Correct answer'}
                        value={answer.value}
                        onChange={handleAnswerChange}></input>
                ))}
            </div>
            <input type="submit" value="Submit" />
        </form>
    )

}

export default QuestionPage;
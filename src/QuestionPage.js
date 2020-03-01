import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addQuestion } from './actions/addQuestion';

const QuestionPage = () => {
    const questions = useSelector(state => state.questions)
    const [title, setTitle] = useState("")
    const [answers, setAnswers] = useState([
        { id: 0, value: "" },
        { id: 1, value: "" },
        { id: 2, value: "" },
        { id: 3, value: "" }
    ])
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(addQuestion(title, answers));
        setTitle("");
        setAnswers([
            { id: 0, value: "" },
            { id: 1, value: "" },
            { id: 2, value: "" },
            { id: 3, value: "" }
        ]);
        event.preventDefault();
    }

    const handleQuestionChange = (event) => {
        setTitle(event.target.value);
    }

    const handleAnswerChange = (event) => {
        const answer = answers.find(a => a.id == event.target.name);
        const temp = [...answers];
        temp.map(t => t.id == answer.id ? t.value = event.target.value : t);
        setAnswers(temp);
    }

    const ShowQuestions = () => {
        if (questions && questions.length) {
            return (
                < div >
                    {
                        questions.map(question =>
                            <div>
                                {question.title}
                            </div>,
                            title.answers.map(answer =>
                                <div>
                                    {answer.value}
                                </div>
                            )
                        )
                    }
                </div >
            )
        }
        else {
            return <div>No questions to be displayed</div>
        }

    }

    return (
        <div>
            <ShowQuestions />
            <div>
                <form onSubmit={handleSubmit}>
                    <label>
                        Enter the question:
                <input type="text" name="question" value={title} onChange={handleQuestionChange} />
                    </label>
                    <div>
                        {answers.map(answer => (
                            <input
                                type="text"
                                name={answer.id}
                                placeholder={answer.id !== 0 ? 'Wrong answer' : 'Correct answer'}
                                value={answer.value}
                                onChange={handleAnswerChange}></input>
                        ))}
                    </div>
                    <input type="submit" value="Submit" />
                </form>
            </div>

        </div>
    )
}


export default QuestionPage;
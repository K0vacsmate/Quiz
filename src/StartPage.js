import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerPlayer } from './actions';

const StartPage = () => {
    const name = useSelector(state => state.name);
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(registerPlayer(name));
        event.preventDefault();
    }

    const handleChange = (event) => {
        setName(event.target.value);
    }

    return (
        <form onsubmit={this.handleSubmit}>
            <label>
                Enter your name:
                <input type="text" value={name} onChange={this.handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form >

    )
}

export default StartPage;
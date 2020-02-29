import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { registerPlayer } from './actions/registerPlayer';

const StartPage = () => {
    const [user, setUser] = useState(useSelector(state => state.user));
    const dispatch = useDispatch();

    const handleSubmit = (event) => {
        dispatch(registerPlayer(user));
        event.preventDefault();

    }

    const handleChange = (event) => {
        setUser(event.target.value);
    }

    return (
        <form onSubmit={handleSubmit}>
            <label>
                Enter your name:
                <input type="text" value={user} onChange={handleChange} />
            </label>
            <input type="submit" value="Submit" />
        </form>

    )

}

export default StartPage;
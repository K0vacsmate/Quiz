import { combineReducers } from 'redux';
import playerReducer from './playerReducer';
import questionReducer from './questionReducer';

const rootreducer = combineReducers({
    playerReducer,
    questionReducer
})

export default rootreducer;
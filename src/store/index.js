import { createStore } from "redux";
import rootReducer from '../reducers';
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: 'root',
    storage,
}

const initialState = {
    questions: [],
    answered: [],
    user: "",
}

const persistedReducer = persistReducer(persistConfig, rootReducer, initialState)
export const store = createStore(persistedReducer, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export const persistor = persistStore(store);




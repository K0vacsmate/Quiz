import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store';
import StartPage from './StartPage';
import QuestionPage from './QuestionPage';


const App = () => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            <StartPage />
            <QuestionPage />
        </PersistGate>
    );
};

export default App;
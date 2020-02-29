import React from 'react';
import { PersistGate } from 'redux-persist/integration/react'
import { persistor } from './store';


const App = () => {
    return (
        <PersistGate loading={null} persistor={persistor}>
            <div>App</div>
        </PersistGate>
    );
};

export default App;
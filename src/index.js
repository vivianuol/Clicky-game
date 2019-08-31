import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import allReducers from './reducers';
//import initialState from './initialState.json';
import thunk from 'redux-thunk';
import {Provider} from 'react-redux';
import {createStore, applyMiddleware } from 'redux';
import logger from 'redux-logger';

export const store = applyMiddleware(thunk, logger)(createStore)(allReducers);

console.log(store.getState());


// const unsubscribe = store.subscribe(() => console.log(store.getState()))

// // Dispatch some actions
// store.dispatch(clickNewCard('Spongebob_Squarepants'));
// store.dispatch(clickNewCard('Pikachu'));
// store.dispatch(clickOldCard());


// // Stop listening to state updates
// unsubscribe()

ReactDOM.render(
    <Provider store = {store}>
       <App /> 
    </Provider>
, document.getElementById('root'));

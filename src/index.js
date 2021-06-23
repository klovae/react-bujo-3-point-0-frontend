import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import rootReducer from './reducers/manageDaysAndTasks';

import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'
//set up store

const store = createStore(rootReducer, applyMiddleware(thunk, window.__REDUX_DEVTOOLS_EXTENSION__));

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>
  , 
  document.getElementById('root'));


import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import redux from 'redux';
import {createStore} from 'redux'
import rootReducer from './reducers/rootReducer';

import {Provider} from 'react-redux'
const store = createStore(rootReducer);

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
    <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
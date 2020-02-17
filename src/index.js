import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App';

import { Provider } from 'react-redux'
import reducers from './reducers/index'
import { createStore, compose, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(reducers, composeEnhancers(applyMiddleware(thunk)))
ReactDOM.render(
  <Provider store={store} >
    <App />
  </Provider>,
  document.querySelector("#root")
);
/* eslint-disable no-undef */
import { createStore, applyMiddleware } from 'redux'
import thunk from 'redux-thunk'
import reducer from './redux/reducers'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './app/app-container'
import { Provider } from 'react-redux'
import * as serviceWorker from './serviceWorker'
import './styles/app.css'

let store = createStore(reducer, applyMiddleware(thunk))

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)

serviceWorker.unregister()

// import libraries
import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, combineReducers, applyMiddleware } from 'redux'
import { Provider } from 'react-redux'
import thunk from 'redux-thunk'
import { composeWithDevTools } from 'redux-devtools-extension'
import { BrowserRouter as Router } from 'react-router-dom'
// import local files
import './index.css';
import App from './App';
import usersReducer from './reducers/usersReducer'
import scriptsReducer from './reducers/scriptsReducer'

import registerServiceWorker from './registerServiceWorker';
// hook up redux
const rootReducer = combineReducers({ 
  auth: usersReducer,
  currentScript: scriptsReducer
})

const store = createStore(
  rootReducer,
  {
    auth: {
      name: null,
      currentUserId: null
    },
    currentScript: {
      
    }
  }, 
  composeWithDevTools(applyMiddleware(thunk))
)

ReactDOM.render((
  <Provider store={store}>
    <Router>
      <App />
    </Router>
  </Provider>), document.getElementById('root'));
registerServiceWorker();



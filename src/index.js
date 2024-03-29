import React from 'react';
import ReactDOM from 'react-dom/client';
import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import { legacy_createStore as createStore, applyMiddleware, compose } from 'redux'
import App from './App';
import reducers from './reducers'

// import 'bootstrap/dist/css/bootstrap.min.css'

const store = createStore(reducers, compose(applyMiddleware(thunk)))


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);



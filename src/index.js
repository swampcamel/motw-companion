import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import App from './components/App';
import { HashRouter } from 'react-router-dom';
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';

import reducers from './reducers';
import reduxThunk from 'redux-thunk';


const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

let unsubscribe = store.subscribe(() =>
console.log(store.getState()))

const render = (Component) => {
  ReactDOM.render(
  <HashRouter>
    <Provider store={store}>
      <App />
    </Provider>
  </HashRouter>,
  document.getElementById('root'));
}

render(App);

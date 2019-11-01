import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import usersApp from './reducers';
import rootSaga from './sagas';

import 'bootstrap/dist/css/bootstrap.css';
import App from './App';
import { loadUserList } from './actions';

const sagaMiddleware = createSagaMiddleware();

const store = createStore(usersApp, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootSaga);

store.dispatch(loadUserList());

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

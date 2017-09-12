import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import reducers from './reducers';
import sagas from './sagas';
import App from './components/App';

const sagaMiddleware = createSagaMiddleware();
let store = createStore(reducers, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(sagas);

window.onload = () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
};

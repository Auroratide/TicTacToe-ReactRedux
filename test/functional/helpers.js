import React from 'react';
import ReactDOM from 'react-dom';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { Provider } from 'react-redux';
import { mount } from 'enzyme';

import reducers from '../../client/reducers';
import sagas from '../../client/sagas';
import App from '../../client/components/App';

export function mountWithStore(Component) {
  const sagaMiddleware = createSagaMiddleware();
  let store = createStore(reducers, applyMiddleware(sagaMiddleware));
  sagaMiddleware.run(sagas);

  return mount(<Provider store={store}>{Component}</Provider>);
}

export function eventually(expectations) {
  new Promise(resolve => resolve()).then(expectations);
}

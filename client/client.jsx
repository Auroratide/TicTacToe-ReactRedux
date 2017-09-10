import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducers from './reducers';
import App from './components/App';

let store = createStore(reducers);

window.onload = () => {
  ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
};

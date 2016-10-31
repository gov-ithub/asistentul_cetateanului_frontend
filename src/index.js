import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk'

import reducer from './reducers'
import RootContainer from './containers';
import './index.css';

const middleware = [thunk];
const store = createStore(
  reducer,
  applyMiddleware(...middleware),
);

ReactDOM.render(
  <RootContainer store={store} history={browserHistory} />,
  document.getElementById('root')
);

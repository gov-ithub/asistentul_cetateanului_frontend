import React from 'react';
import ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';

import Routes from './routes';
import Template from './Template';

import './index.css';

ReactDOM.render(
  ( 
    <Template>
      <Routes history={browserHistory}/>
    </Template>
  ),
  document.getElementById('root')
);

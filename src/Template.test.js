import React from 'react';
import ReactDOM from 'react-dom';
import Template from './Template';

jest.mock('./utils/AuthService');
import AuthService from './utils/AuthService';

const auth = new AuthService('foo', 'bar');


it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Template auth={auth} />, div);
});

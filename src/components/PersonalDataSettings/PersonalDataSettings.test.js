import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDataSettings from './PersonalDataSettings';

jest.mock('../../utils/AuthService');
import AuthService from '../../utils/AuthService';

const auth = new AuthService('foo', 'bar');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalDataSettings auth={auth} />, div);
});

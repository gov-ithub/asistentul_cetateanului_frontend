import React from 'react';
import ReactDOM from 'react-dom';
import EditPersonalData from './EditPersonalData';
import {
  UserProfile
} from '../../utils/AuthService';

jest.mock('../../utils/AuthService');
import AuthService from '../../utils/AuthService';

const auth = new AuthService('foo', 'bar');

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditPersonalData profile={UserProfile} auth={auth} />, div);
});

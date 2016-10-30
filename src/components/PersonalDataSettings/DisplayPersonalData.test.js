import React from 'react';
import ReactDOM from 'react-dom';
import DisplayPersonalData from './DisplayPersonalData';
import {
  UserProfile
} from '../../utils/AuthService';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<DisplayPersonalData profile={UserProfile} />, div);
});

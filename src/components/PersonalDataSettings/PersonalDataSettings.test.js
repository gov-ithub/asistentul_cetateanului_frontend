import React from 'react';
import ReactDOM from 'react-dom';
import PersonalDataSettings from './index';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<PersonalDataSettings />, div);
});

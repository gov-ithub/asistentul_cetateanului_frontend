import React from 'react';
import ReactDOM from 'react-dom';
import NotificationSettings from './NotificationSettings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotificationSettings />, div);
});

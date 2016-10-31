import React from 'react';
import ReactDOM from 'react-dom';
import EditNotificationSettings from './EditNotificationSettings';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<EditNotificationSettings />, div);
});

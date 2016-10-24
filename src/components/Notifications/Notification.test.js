import React from 'react';
import ReactDOM from 'react-dom';
import Notification from './Notification';

const Notif = {
  title: "Test Notification",
  timestamp: 1477272824,
  description: "This is really just a test",
  source: {
    id: 1,
    name: "GovITHub"
  }
}

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<Notification notif={Notif} />, div);
});

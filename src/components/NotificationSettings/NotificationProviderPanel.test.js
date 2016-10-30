import React from 'react';
import ReactDOM from 'react-dom';
import NotificationProviderPanel from './NotificationProviderPanel';

const NotificationProviders = [
  {
    id: 1,
    name: 'Fii boss, ia-ti baross',
    image: 'http://placehold.it/350x150',
    description: 'Ti-ai dorit din totdeauna un baros dar nu ai stiut de unde sa il iei? Noi iti sarim in ajutor!'
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<NotificationProviderPanel provider={NotificationProviders[0]} key="0"/>, div);
});

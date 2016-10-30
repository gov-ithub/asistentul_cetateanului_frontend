import React from 'react';
import ReactDOM from 'react-dom';
import ListSubscribedNotificationSources from './ListSubscribedNotificationSources';

const Notifications = [
  {
    id: 1,
    name: 'MariusBoss98',
    image: 'http://placehold.it/350x150',
    types: [
      {
        id: 2,
        name: 'Marius e boss',
      },
      {
        id: 3,
        name: 'Marius e baross',
      }
    ],
  }
]

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<ListSubscribedNotificationSources source={Notifications[0]} key="0" />, div);
});

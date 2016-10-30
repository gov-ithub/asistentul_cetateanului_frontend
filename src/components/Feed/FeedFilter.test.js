import React from 'react';
import ReactDOM from 'react-dom';
import FeedFilter from './FeedFilter';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<FeedFilter />, div);
});

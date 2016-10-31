import React from 'react';
import ReactDOM from 'react-dom';
import { Feed } from './Feed';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const props = { isFetching: false, notifications: [], dispatch: () => {} };
  ReactDOM.render(<Feed { ...props } />, div);
});

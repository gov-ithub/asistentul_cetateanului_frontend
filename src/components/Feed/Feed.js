import React, { Component } from 'react';
import Notification from '../Notifications/Notification';

const Notif = {
  title: "Test Notification",
  timestamp: 1477272824,
  description: "This is really just a test",
  source: {
    id: 1,
    name: "GovITHub"
  }
}

export default class Feed extends Component {
  render() {
    return (
      <div>
        <h1>Feed</h1>
        <Notification notif={Notif} />
      </div>
    );
  }
}

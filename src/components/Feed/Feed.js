// @flow
import React, { Component } from 'react';

import Notification from '../Notifications/Notification';
import FeedFilter from './FeedFilter';

const Notifications = [
  {
    title: "Programare RAR",
    timestamp: 1477272824,
    description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    source: {
      id: 1,
      name: "GovITHub/Stop Cozi"
    },
    severity: "success"
  },
  {
    title: "Alertă Cod Roșu",
    timestamp: 1477272824,
    description: "Nunc finibus, dolor malesuada sodales finibus, nisi diam iaculis ante, sed rutrum quam sapien laoreet sapien.",
    source: {
      id: 2,
      name: "Administratia Nationala de Meteorologie"
    },
    severity: "danger"
  },
  {
    title: "Training gratuit / Obținere fonduri Europene",
    timestamp: 1477272824,
    description: "Proin vel dignissim est, ac venenatis orci. Vestibulum id viverra nisl. Praesent vehicula dignissim lorem, sit amet mollis orci blandit ac. Vestibulum et gravida risus.",
    source: {
      id: 3,
      name: "Ministerul Agriculturii și Dezvoltării Rurale"
    },
    severity: "success"
  },
];

export default class Feed extends Component {
  render() {
    let notifications_container = [];
    for (let i = 0, len = Notifications.length; i < len; i++) {
      notifications_container.push(
        <Notification notif={Notifications[i]} key={i}/>
      );
    }

    return (
      <div>
        <FeedFilter />
        {notifications_container}
      </div>
    );
  }
}

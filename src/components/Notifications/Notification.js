// @flow
import React, { Component } from 'react';
import { 
  Alert
} from 'react-bootstrap';

type NotificationSource = {
  id: number,
  name: string
}

type NotificationData = {
  title: string,
  timestamp: number,
  description: string,
  source: NotificationSource
}

export default class Notification extends Component {
  props: {
    notif: NotificationData
  }

  render() {
    const ts_to_date = new Date(this.props.notif.timestamp * 1000);
    const human_date = 
      ts_to_date.getDate() + '/' +
      ts_to_date.getMonth() + '/' + 
      ts_to_date.getFullYear();

    return (
      <Alert> 
        <strong>{this.props.notif.title}</strong>
        <p>{this.props.notif.description}</p>
        <p>{this.props.notif.source.name} &bull; {human_date}</p>
      </Alert>
    );
  }
}


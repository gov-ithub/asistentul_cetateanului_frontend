// @flow
import React, { Component } from 'react';
import { 
  Alert,
  Label
} from 'react-bootstrap';

import './notifications.css';

type NotificationSource = {
  id: number,
  name: string
}

type NotificationSeverity = 
  | "success"
  | "warning"
  | "danger";

type NotificationData = {
  title: string,
  timestamp: number,
  description: string,
  source: NotificationSource,
  severity: NotificationSeverity
}

const TranslatedSeverity = {
  "success": "Trivial",
  "warning": "Important",
  "danger": "Urgent"
};

export default class Notification extends Component {
  props: {
    notif: NotificationData
  }

  render() {
    const { notif } = this.props;

    const ts_to_date = new Date(notif.timestamp * 1000);
    const human_date = 
      ts_to_date.getDate() + '/' +
      ts_to_date.getMonth() + '/' + 
      ts_to_date.getFullYear();

    return (
      <Alert bsStyle="warning" className="notification">  
        <strong>{notif.title}</strong>
        <p>{notif.description}</p>
        <p>
          {notif.source.name} &bull; {human_date} 
          <Label bsStyle={notif.severity} >
            {TranslatedSeverity[notif.severity]}            
          </Label>
        </p>
      </Alert>
    );
  }
}


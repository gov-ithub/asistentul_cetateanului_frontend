// @flow
import React, { Component } from 'react';
import { 
  Alert,
  Label
} from 'react-bootstrap';

import { notification as notificationType } from '../../types';
import './notifications.css';

const TranslatedSeverity = {
  "success": "Trivial",
  "warning": "Important",
  "danger": "Urgent"
};

export default class Notification extends Component {
  props: {
    notif: notificationType
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


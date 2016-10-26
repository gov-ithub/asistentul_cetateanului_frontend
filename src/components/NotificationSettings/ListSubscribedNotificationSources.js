// @flow
import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import EditNotificationSourcePanel from './EditNotificationSourcePanel';

const Notifications = [
  {
    id: 1,
    name: 'Ministerul de Interne',
    image: 'http://placehold.it/350x150',
    types: [
      {
        id: 2,
        name: 'Expirare buletin',
      },
      {
        id: 3,
        name: 'Plata amenzi',
      }
    ],
  },
  {
    id: 4,
    name: 'GovITHub',
    image: 'http://placehold.it/350x150',
    types: [
      {
        id: 5,
        name: 'StopCozi!',
      },
      {
        id: 6,
        name: 'RomanescU',
      },
      {
        id: 7,
        name: 'GovITHub SSO',
      }
    ],
  }, 
  {
    id: 8,
    name: 'Ministerul Agriculturii și Dezvoltării Rurale',
    image: 'http://placehold.it/350x150',
    types: [
      {
        id: 9,
        name: 'Oportunitati de dezvoltare',
      },
    ],
  }, 
  {
    id: 10,
    name: 'Administratia Nationala de Meteorologie',
    image: 'http://placehold.it/350x150',
    types: [
      {
        id: 11,
        name: 'Cod Galben',
      },
      {
        id: 12,
        name: 'Cod Portocaliu',
      },
      {
        id: 13,
        name: 'Cod Rosu',
      },
    ],
  }, 
];

export default class ListSubscribedNotificationSources extends Component {
  render() {
    let container = [];
    let notif_batch = [];

    for (let i = 0, len = Notifications.length; i < len; i++) {
      notif_batch.push(
        <Col xs={12} sm={6} md={4} key={'NotificationColumn-' + i}>
          <EditNotificationSourcePanel 
            source={Notifications[i]} 
            key={'NotificationSource-' + i} 
          />
        </Col>
      );

      if (notif_batch.length === 3) {
        container.push(
          <Row key={'Row-' + i}>{notif_batch}</Row>
        );
        notif_batch = [];
      }
    }

    if (notif_batch.length > 0) {
      container.push(
        <Row key="Row-Last">{notif_batch}</Row>
      );
    }
    
    return (
      <div>{container}</div>
    );
  }
}

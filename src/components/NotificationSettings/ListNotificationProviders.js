// @flow
import React, { Component } from 'react';
import {
  Row,
  Col,
} from 'react-bootstrap';
import NotificationProviderPanel from './NotificationProviderPanel';

const NotificationProviders = [
  {
    id: 1,
    name: 'Compania Națională de Autostrăzi și Drumuri Naționale',
    image: 'http://placehold.it/350x150',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam eu euismod ante. In viverra cursus egestas'
  },
  {
    id: 2,
    name: 'Agentia Nationala de Administrare Fiscala',
    image: 'http://placehold.it/350x150',
    description: 'Integer nibh sapien, posuere quis nisi id, varius dapibus nulla. Donec gravida molestie massa vitae lobortis.'
  }, 
  {
    id: 3,
    name: 'GovITHub',
    image: 'http://placehold.it/350x150',
    description: 'Ut fringilla nec erat in pellentesque. Aenean accumsan diam metus, ut lacinia lectus pretium non'
  }
];

export default class ListNotificationProviders extends Component {
  render() {
    let container = [];
    let notif_batch = [];

    for (let i = 0, len = NotificationProviders.length; i < len; i++) {
      notif_batch.push(
        <Col xs={12} sm={6} md={4} key={'NotificationColumn-' + i}>
          <NotificationProviderPanel 
            provider={NotificationProviders[i]} 
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

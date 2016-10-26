// @flow
import React, { Component } from 'react';
import {
  Row,
  Col,
  Alert,
  ListGroup,
  ListGroupItem
} from 'react-bootstrap';

import type { 
  UserProfile
} from '../../utils/AuthService';

export default class DisplayPersonalData extends Component {
  props: {
    profile: UserProfile
  }

  render() {
    const { profile } = this.props || {};
    if (!profile) {
      return (
        <div>
          <Alert bsStyle="warning">
            Date indisponibile. Vă rugăm încercați mai târziu.
          </Alert>  
        </div>
      );
    }

    const { telefon } = profile 
      ? profile.user_metadata || {}
      : {};

    return (
      <Row>
        <Col md={12}>
          <ListGroup fill>
            <ListGroupItem>
              <strong>Nume: </strong> {profile.name}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Email: </strong> {profile.email}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Username: </strong> {profile.nickname}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Telefon: </strong> {telefon}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Creat pe data de: </strong> {profile.created_at}
            </ListGroupItem>
            <ListGroupItem>
              <strong>Actualizat pe data de: </strong> {profile.updated_at}
            </ListGroupItem>
          </ListGroup>
        </Col>
      </Row>
    );
  }
}

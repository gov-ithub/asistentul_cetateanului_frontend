// @flow
import React, { Component } from 'react';
import {
  Row,
  Col,
  Image,
  Alert
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
        <Col md={2} mdOffset={4}>
          <Image src={profile.picture} circle />
        </Col>
        <Col>
          <h3>Date personale</h3>
          <p><strong>Nume: </strong> {profile.name}</p>
          <p><strong>Email: </strong> {profile.email}</p>
          <p><strong>Username: </strong> {profile.nickname}</p>
          <p><strong>Telefon: </strong> {telefon}</p>
          <p><strong>Creat pe data de: </strong> {profile.created_at}</p>
          <p><strong>Actualizat pe data de: </strong> {profile.updated_at}</p>
        </Col>
      </Row>
    );
  }
}

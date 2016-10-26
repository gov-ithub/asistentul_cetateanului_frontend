import React, { PropTypes as T, Component } from 'react';
import {
  Row,
  Col,
  Image,
} from 'react-bootstrap';

export default class DisplayPersonalData extends Component {
  static propTypes = {
    profile: T.object,
  }

  render() {
    const { profile } = this.props;
    const { telefon } = profile.user_metadata || {};

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

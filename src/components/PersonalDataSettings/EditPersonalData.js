import React, { PropTypes as T, Component } from 'react';
import ReactDOM from 'react-dom';
import AuthService from '../../utils/AuthService';
import {
  Row,
  Col,
  Form,
  FormGroup,
  FormControl,
  ControlLabel,
  Button,
  Alert
} from 'react-bootstrap';

export default class EditPersonalData extends Component {
  static propTypes = {
    profile: T.object,
    auth: T.instanceOf(AuthService)
  }

  state: {
    updated: boolean
  }

  handleSubmit(e) {
    e.preventDefault();
    const { profile, auth } = this.props;
    auth.updateProfile(profile.user_id, {
      user_metadata: {
        telefon: ReactDOM.findDOMNode(this.refs.Telefon).value
      }
    });
  }

  handleAlertDismiss() {
    this.setState({
      updated: false
    });
  }

  constructor(props: Props, context: any) {
    super(props, context);

    this.state = {
      updated: false
    }

    props.auth.on('profile_updated', (newProfile) => {
      this.setState({
        updated: true
      })
    });
  }

  render() {
    const { profile } = this.props;
    const { telefon } = profile.user_metadata || {};

    let confirmation_box = null;
    if (this.state.updated) {
      confirmation_box = (
        <Alert bsStyle="warning" onDismiss={this.handleAlertDismiss.bind(this)}>
          Datele au fost actualizate
        </Alert>
      );
    }

    return (
      <Row>
        <Col md={12}>
          {confirmation_box}
          <Form horizontal onSubmit={this.handleSubmit.bind(this)}>
            <FormGroup controlId="telefon">
              <Col componentClass={ControlLabel} sm={2}>
                Telefon
              </Col>
              <Col sm={4}>
                <FormControl type="text" defaultValue={telefon} ref="Telefon" />
              </Col>
            </FormGroup>
            <FormGroup>
              <Col smOffset={2} sm={10}>
                <Button type="submit">Salvează</Button>
              </Col>
            </FormGroup>
          </Form>
        </Col>
      </Row>
    );
  }
}

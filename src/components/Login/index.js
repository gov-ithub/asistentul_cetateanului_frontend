import React, { PropTypes as T, Component } from 'react';
import ReactDOM from 'react-dom';
import {Form, FormGroup, FormControl, ControlLabel, Button, ButtonToolbar} from 'react-bootstrap';
import AuthService from '../../utils/AuthService';


export default class Login extends Component {
  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  handleSubmit(e) {
    e.preventDefault();

    this.props.auth.login({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }, function(err) {
      if (err) {
        alert("Something went wrong: " + err.message);
      }
    });
  }

  signUp() {
    console.log(this.props);

    this.props.auth.signup({
      connection: 'Username-Password-Authentication',
      responseType: 'token',
      email: ReactDOM.findDOMNode(this.refs.email).value,
      password: ReactDOM.findDOMNode(this.refs.password).value
    }, function(err) {
      if (err) {
        alert("Something went wrong: " + err.message);
      }
    });
  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <Form onSubmit={this.handleSubmit.bind(this)}>
          <FormGroup controlId="email">
            <ControlLabel>E-mail</ControlLabel>
            <FormControl 
              type="email" 
              ref="email" 
              placeholder="email@exemplu.ro"
              required
            />
          </FormGroup>

          <FormGroup controlId="password">
            <ControlLabel>Parola</ControlLabel>
            <FormControl 
              type="password" 
              ref="password" 
              placeholder="Parola"
            />
          </FormGroup>

          <ButtonToolbar>
            <Button type="submit" bsStyle="primary"> 
              Sign in
            </Button>
            <Button onClick={this.signUp.bind(this)}> 
              Sign up
            </Button>
          </ButtonToolbar>
        </Form>
      </div>
    );
  }
}

import React, { PropTypes as T, Component } from 'react';
import { 
  Navbar, 
  Nav, 
  NavItem, 
  Grid, 
  Row, 
  Col,
  NavDropdown,
  MenuItem
} from 'react-bootstrap';

import AuthService from './utils/AuthService';

import './template.css';

class Template extends Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService)
  }

  constructor(props, context) {
    super(props, context);
    this.state = {
      profile: this.props.auth.getProfile()
    }
    this.props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    });
  }

  logout() {
    this.props.auth.logout();
    this.context.router.push('/home');
  }

  render() {
    const { profile } = this.state;

    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.auth
      })
    }

    let profile_details = null;
    let login_button = null;
    let logout_button = null;

    if (this.props.auth.isLoggedIn()) {
      logout_button = 
        <NavItem eventKey={2} onClick={this.logout.bind(this)}>Logout</NavItem>;
      profile_details = 
        <NavDropdown eventKey={3} title={profile.name} id={profile.name}>
          <MenuItem eventKey={3.1} href="/setari/date-personale">
            Setări Personale
          </MenuItem>
          <MenuItem eventKey={3.2} href="/setari/notificari">
            Setări Notificări
          </MenuItem>
        </NavDropdown>;
    } else {
      login_button = (
        <NavItem eventKey={11} href="#" onClick={this.props.auth.login.bind(this)}>
          Sign in
        </NavItem>
      );
    }
    

    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">Asistentul Cetățeanului</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {login_button}
              {profile_details}
            </Nav>
            <Nav pullRight> 
              <NavItem eventKey={1} href="/flux">Flux</NavItem>
              {logout_button}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={3} md={3} className="sidebar">
              Sidebar
            </Col>
            <Col xs={9} md={9}>{children}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Template;

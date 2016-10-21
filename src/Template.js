import React, { PropTypes as T, Component } from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';
import AuthService from './utils/AuthService';

import './template.css';

class Template extends Component {
  static contextTypes = {
    router: T.object
  }

  static propTypes = {
    auth: T.instanceOf(AuthService).isRequired
  }

  constructor(props, context) {
    super(props, context);

    this.state = {
      profile: this.props.auth.getProfile(),
      isLoggedIn: this.props.auth.isLoggedIn()
    };

    this.props.auth.on('profile_updated', (newProfile) => {
      this.setState({
        profile: newProfile
      })
    });
  }

  logout() {
    this.props.auth.logout();
    this.setState({
      isLoggedIn: false
    });
    this.context.router.push('/login');
  }

  render() {
    console.log(this.state);
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.auth
      })
    }
    
    const { profile, isLoggedIn } = this.state;

    let profile_details = null;
    let register_button = 
      <NavItem eventKey={1} href="/inregistreaza-te">Înregistrează-te</NavItem>;
    let login_button = 
      <NavItem eventKey={2} href="/login">Login</NavItem>;
    if (isLoggedIn) {
      profile_details = <Navbar.Text>Bun venit, {profile.nickname}!</Navbar.Text>;
      register_button = null;
      login_button = null;
    }

    return (
      <div>
        <Navbar inverse>
          <Navbar.Header>
            <Navbar.Brand>
              <a href="#">Asistentul Cetățeanului</a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {register_button}
              {login_button}
            </Nav>
            {profile_details}
            <Nav pullRight> 
              <NavItem eventKey={1} href="/flux">Flux</NavItem>
              <NavItem eventKey={2} onClick={this.logout.bind(this)}>Logout</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={4} md={2} className="sidebar">
              Sidebar
            </Col>
            <Col xs={10} md={5}>{children}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Template;

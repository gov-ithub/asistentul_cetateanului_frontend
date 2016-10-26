// @flow
import React, { PropTypes as T, Component, Element } from 'react';
import { 
  Navbar, 
  Nav, 
  NavItem, 
  Grid, 
  Row, 
  Col,
  NavDropdown,
  MenuItem,
  Glyphicon
} from 'react-bootstrap';

import AuthService from './utils/AuthService';
import type { UserProfile } from './utils/AuthService';
import classnames from 'classnames';

import './template.css';

type Props = {
  auth: AuthService,
  children: Element<any>,
  className?: string
}

type State = {
  profile: UserProfile
}

class Template extends Component {
  // TODO: Need interface declaration for react-router
  static contextTypes = {
    router: T.object
  };

  props: Props;
  state: State;

  constructor(props: Props, context: any) {
    super(props, context);
    this.state = {
      profile: this.props.auth.getProfile()
    }
    this.props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    });
  }

  logout(): void {
    this.props.auth.logout();
    this.context.router.push('/home');
  }

  render(): Element<any> {
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
    let flux_button = null;

    if (this.props.auth.isLoggedIn()) {
      logout_button = 
        <NavItem eventKey={2} onClick={this.logout.bind(this)}>Logout</NavItem>;
      profile_details = 
        <NavDropdown 
          eventKey={3} 
          title={"Bun venit, " + profile.name}
          id="personalizare">
          <MenuItem eventKey={3.1} href="/setari/date-personale">
            Setări Personale
          </MenuItem>
          <MenuItem eventKey={3.2} href="/setari/notificari">
            Setări Notificări
          </MenuItem>
        </NavDropdown>;
      flux_button = 
        <NavItem eventKey={1} href="/flux">Flux</NavItem>
    } else {
      login_button = (
        <NavItem eventKey={11} href="#" onClick={this.props.auth.login.bind(this)}>
          Sign in
        </NavItem>
      );
    }
    
    const { className } = this.props;

    return (
      <div className={classnames('app-header', className)}>
        <Navbar fixedTop={true} >
          <Navbar.Header>
            <Navbar.Brand>
              <a href="/home">
                <Glyphicon glyph="send" className="app-header-logo" />
                Asistentul Cetățeanului
              </a>
            </Navbar.Brand>
            <Navbar.Toggle />
          </Navbar.Header>
          <Navbar.Collapse>
            <Nav>
              {profile_details}
            </Nav>
            <Nav pullRight> 
              {login_button}
              {flux_button}
              {logout_button}
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid className="app-container">
          <Row>
            <Col xs={12} md={12}>{children}</Col>
          </Row>
        </Grid>
        <Navbar fixedBottom={true} >
          <Navbar.Collapse>
            <Navbar.Text>
              Made by <a href="http://ithub.gov.ro/">GovITHub</a>
            </Navbar.Text>
            <Nav pullRight>
                    
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}

export default Template;

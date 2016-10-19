import React, { Component } from 'react';
import { Navbar, Nav, NavItem, Grid, Row, Col } from 'react-bootstrap';

import './template.css';

class Template extends Component {
  render() {    
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
              <NavItem eventKey={1} href="/inregistreaza-te">Înregistrează-te</NavItem>
              <NavItem eventKey={2} href="/login">Login</NavItem>
            </Nav>
            <Nav pullRight> 
              <NavItem eventKey={1} href="/flux">Flux</NavItem>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
        <Grid>
          <Row>
            <Col xs={4} md={2} className="sidebar">
              <h2>Sidebar</h2>
            </Col>
            <Col xs={10} md={5}>{this.props.children}</Col>
          </Row>
        </Grid>
      </div>
    );
  }
}

export default Template;

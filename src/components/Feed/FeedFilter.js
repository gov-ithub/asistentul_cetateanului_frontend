// @flow
import React, { Component } from 'react';
import { 
  Nav,
  Navbar,
  NavDropdown,
  MenuItem,
  Button,
  FormGroup,
  FormControl,
} from 'react-bootstrap';

import './feedfilter.css';

const NotificationSources = [
  {
    name: "Compania Națională de Autostrăzi și Drumuri Naționale",
    id: 10,
  },
  {
    name: "Agentia Nationala de Administrare Fiscala",
    id: 11,
  },
  {
    name: "GovITHub",
    id: 12,
  },
  {
    name: "Ministerul de Interne",
    id: 13,
  },
  {
    name: "Ministerul Agriculturii și Dezvoltării Rurale",
    id: 14,
  },
  {
    name: "Administratia Nationala de Meteorologie",
    id: 15,
  },
];

export default class FeedFilter extends Component {
  handleSearch(e: Event): void {
    e.preventDefault();
  }

  render() {
    let sources_container = [];
    for (let i = 0, len = NotificationSources.length; i < len; i++) {
      sources_container.push(
        <MenuItem 
          eventKey={NotificationSources[i].id}
          key={NotificationSources[i].id}>
          {NotificationSources[i].name}
        </MenuItem>
      );
    }

    return (
      <Navbar className="feed-filter-navbar"> 
        <Navbar.Header>
          <Navbar.Brand>
            Flux alerte
          </Navbar.Brand>
          <Navbar.Toggle />
        </Navbar.Header>
        <Navbar.Collapse>
          <Nav pullRight>
            <NavDropdown 
              eventKey="2" 
              title="Selectează o sursă" 
              id="sursa">
              {sources_container}
            </NavDropdown>
          </Nav>
          <Navbar.Form pullRight>
            <FormGroup>
              <FormControl type="test" placeholder="Caută..." />
            </FormGroup>
            {' '}
            <Button type="submit" onClick={this.handleSearch}>Filtrează</Button>
          </Navbar.Form>
        </Navbar.Collapse>
      </Navbar>
    );
  }
}

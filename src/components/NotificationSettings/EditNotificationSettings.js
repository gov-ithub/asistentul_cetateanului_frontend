// @flow
import React, { Component } from 'react';
import {
  Nav,
  NavItem
} from 'react-bootstrap';
import ListSubscribedNotificationSources from './ListSubscribedNotificationSources';
import ListNotificationProviders from './ListNotificationProviders';

import './notificationsettings.css';

type CurrentTab = 
  | "SUBSCRIBED"
  | "PROVIDERS";

export default class EditNotificationSettings extends Component {
  state: {
    tab: CurrentTab
  };

  handleSelect(eventKey: CurrentTab): void {
    event.preventDefault();
    this.setState({
      tab: eventKey
    });
  }

  constructor() {
    super();

    this.state = {
      tab: "SUBSCRIBED"
    }
  }

  render() {
    let tab_content = null;
    switch (this.state.tab) {
      case "PROVIDERS": 
        tab_content = <ListNotificationProviders />;
        break;
      case "SUBSCRIBED":
      default:
        tab_content = <ListSubscribedNotificationSources />;
        break;
    }

    return (
      <div>
        <Nav
          bsStyle="pills"
          activeKey="1"
          onSelect={this.handleSelect.bind(this)}
          className="notification-settings-header">
          <NavItem 
            eventKey="SUBSCRIBED" 
            active={this.state.tab === "SUBSCRIBED"}>
            Surse de notificări abonate
          </NavItem>
          <NavItem 
            eventKey="PROVIDERS" 
            active={this.state.tab === "PROVIDERS"}>
            Provideri de alerte
          </NavItem>
        </Nav>
        {tab_content}
      </div>
    );
  }
}

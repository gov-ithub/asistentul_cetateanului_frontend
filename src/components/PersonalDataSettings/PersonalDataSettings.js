// @flow
import React, { PropTypes as T, Component } from 'react';
import AuthService from '../../utils/AuthService';
import {
  Nav,
  NavItem
} from 'react-bootstrap';
import DisplayPersonalData from './DisplayPersonalData';
import EditPersonalData from './EditPersonalData';

import type { 
  UserProfile
} from '../../utils/AuthService';

type EditPersonalDataAction =
  | "DISPLAY"
  | "EDIT";

type Props = {
  auth: AuthService
};

export default class PersonalDataSettings extends Component {
  static contextTypes = {
    router: T.object
  }

  state: {
    profile: UserProfile,
    action: EditPersonalDataAction
  };

  props: Props;

  handleSelect(eventKey: EditPersonalDataAction): void {
    event.preventDefault();
    this.setState({
      action: eventKey
    });
  }

  constructor(props: Props, context: any) {
    super(props, context);

    this.state = {
      profile: this.props.auth.getProfile(),
      action: "DISPLAY" 
    }

    props.auth.on('profile_updated', (newProfile) => {
      this.setState({profile: newProfile})
    });
  }
  
  render() {
    const { profile } = this.state;
    const { auth } = this.props;

    let action_component = null;
    switch (this.state.action) {
      case "EDIT":
        action_component = <EditPersonalData profile={profile} auth={auth} />;
        break;
      case "DISPLAY": 
      default:
        action_component = <DisplayPersonalData profile={profile} />;
        break;
    }

    return (
      <div>
        <Nav bsStyle="tabs" activeKey="1" onSelect={this.handleSelect.bind(this)}>
          <NavItem eventKey="DISPLAY" active={this.state.action === "DISPLAY"}>
            Afișează date personale
          </NavItem>
          <NavItem eventKey="EDIT" active={this.state.action === "EDIT"}>
            Editează date personale
          </NavItem>
        </Nav>
        {action_component}
      </div>
    );
  }
}

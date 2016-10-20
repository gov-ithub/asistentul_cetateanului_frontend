import React, { PropTypes as T, Component } from 'react';

class ProfileDetails extends Component {
  static propTypes = {
    profile:T.object
  }

  render() {    
    const { profile } = this.props;
    return <p>Bun venit, {profile.name}!</p>;
  }
}

export default ProfileDetails;

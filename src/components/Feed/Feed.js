// @flow
import React, { Component } from 'react';
import { connect } from 'react-redux'

import Notification from '../Notifications/Notification';
import FeedFilter from './FeedFilter';
import { fetchNotifications } from '../../actions';

type props = {
  isFetchingNotifications: boolean,
  notifications: Array<NotificationData>,
};

class Feed extends Component {

  props: props;

  componentDidMount() {
    const { dispatch } = this.props;
    dispatch(fetchNotifications());
  }
  
  render() {
    let notifications_container = [];
    for (let i = 0, len = this.props.notifications.length; i < len; i++) {
      notifications_container.push(
        <Notification notif={this.props.notifications[i]} key={i}/>
      );
    }

    return (
      <div>
        <FeedFilter />
        {notifications_container}
      </div>
    );
  }
}

const mapStateToProps = (state, ownProps) => {

  const { isFetching, notifications } = state.notifications;

  return {
    isFetchingNotifications: isFetching,
    notifications,
  };
}

export { Feed };

export default connect(mapStateToProps)(Feed);

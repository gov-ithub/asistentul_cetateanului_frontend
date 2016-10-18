import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NotificationSettings extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotificationSettings', className)} {...props}>
        <h1>NotificationSettings</h1>
      </div>
    );
  }
}

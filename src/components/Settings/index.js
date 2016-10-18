import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Settings extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Settings', className)} {...props}>
        <h1>Settings</h1>
      </div>
    );
  }
}

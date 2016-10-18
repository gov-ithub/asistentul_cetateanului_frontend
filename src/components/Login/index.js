import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Login extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Login', className)} {...props}>
        <h1>Login</h1>
      </div>
    );
  }
}

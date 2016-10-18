import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Register extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Register', className)} {...props}>
        <h1>Register</h1>
      </div>
    );
  }
}

import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class PersonalDataSettings extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('PersonalDataSettings', className)} {...props}>
        <h1>PersonalDataSettings</h1>
      </div>
    );
  }
}

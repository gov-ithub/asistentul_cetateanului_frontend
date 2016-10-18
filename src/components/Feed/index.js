import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class Feed extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('Feed', className)} {...props}>
        <h1>Feed</h1>
      </div>
    );
  }
}

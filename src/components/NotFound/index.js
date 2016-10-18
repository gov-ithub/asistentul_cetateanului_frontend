import React, { PropTypes, Component } from 'react';
import classnames from 'classnames';

import './style.css';

export default class NotFound extends Component {
  render() {
    const { className, ...props } = this.props;
    return (
      <div className={classnames('NotFound', className)} {...props}>
        <h1> 
          404
        </h1>
      </div>
    );
  }
}

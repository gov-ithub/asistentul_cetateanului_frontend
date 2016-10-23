import React, { PropTypes as T } from 'react';
import Template from './Template';

export class Container extends React.Component {
  static contextTypes = {
    router: T.object,
  }

  render() {
    let children = null;
    if (this.props.children) {
      children = React.cloneElement(this.props.children, {
        auth: this.props.route.auth
      })
    } 

    return (
      <Template auth={this.props.route.auth}>
        {children}
      </Template>
    );
  }
}

export default Container;

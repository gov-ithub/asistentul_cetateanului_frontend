import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import Template from './Template';
import Register from './components/Register';
import Login from './components/Login';
import Settings from './components/Settings';
import PersonalDataSettings from './components/PersonalDataSettings';
import NotificationSettings from './components/NotificationSettings';
import Feed from './components/Feed';
import NotFound from './components/NotFound';

import AuthService from './utils/AuthService';

const auth = new AuthService(
  process.env.REACT_APP_AUTH0_CLIENT_ID, 
  process.env.REACT_APP_AUTH0_DOMAIN
);

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    replace({pathname: '/login'});
  }
}

const hideFromAuth = (nextState, replace) => {
  if (auth.isLoggedIn()) {
    replace({pathname: '/'});
  }
}

const parseAuthHash = (nextState, replace) => {
  auth.parseHash(nextState.location.hash);
  replace({ pathname: '/' });
}

// Need to pass auth to Template too
var AuthTemplate = React.createClass({
  render() {
    return (
      <Template auth={auth}> 
        {this.props.children}
      </Template>
    );
  }
});

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={AuthTemplate} auth={auth}>
      <IndexRedirect to="/flux" />
      <Route path="access_token:token" onEnter={parseAuthHash} />
      <Route path="/inregistreaza-te" component={Register} onEnter={hideFromAuth} />
      <Route path="/login" component={Login} onEnter={hideFromAuth} />
      <Route path="/setari" component={Settings} onEnter={requireAuth} />
      <Route 
        path="/setari/date-personale" 
        component={PersonalDataSettings} 
        onEnter={requireAuth} 
      />
      <Route 
        path="/setari/notificari" 
        component={NotificationSettings} 
        onEnter={requireAuth}
      />
      <Route path="/flux" component={Feed} onEnter={requireAuth}/>
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;

import React from 'react';
import { Router, Route, IndexRedirect } from 'react-router';

import Container from './Container';
import Settings from './components/Settings/Settings';
import PersonalDataSettings from './components/PersonalDataSettings/PersonalDataSettings';
import NotificationSettings from './components/NotificationSettings/NotificationSettings';
import Feed from './components/Feed/Feed';
import Home from './components/Home/Home';
import NotFound from './components/NotFound/NotFound';

import AuthService from './utils/AuthService';

const auth = new AuthService(
  process.env.REACT_APP_AUTH0_CLIENT_ID, 
  process.env.REACT_APP_AUTH0_DOMAIN
);

const requireAuth = (nextState, replace) => {
  if (!auth.isLoggedIn()) {
    replace({pathname: '/home'});
  }
}

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={Container} auth={auth}>
      <IndexRedirect to="/home" />
      <Route path="/home" component={Home} />
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
      <Route path="/home/?access_token=:token" component={Home} />
      <Route path="*" component={NotFound} />
    </Route>
  </Router>
);

export default Routes;

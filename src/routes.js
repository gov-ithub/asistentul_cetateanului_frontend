import React from 'react';
import { Router, Route } from 'react-router';

import App from './components/App';
import Register from './components/Register';
import NotFound from './components/NotFound';

const Routes = (props) => (
  <Router {...props}>
    <Route path="/" component={App} />
    <Route path="/inregistreaza-te" component={Register} />
    <Route path="/login" component={Login} />
    <Route path="/setari" component={Settings} />
    <Route path="/setari/date-personale" component={PersonalDataSettings} />
    <Route path="/setari/notificari" component={NotificationSettings} />
    <Route path="/flux" component={Feed}
    <Route path="*" component={NotFound} />
  </Router>
);

export default Routes;

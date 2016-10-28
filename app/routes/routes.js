import React from 'react';
import { Route, Router, browserHistory, IndexRoute } from 'react-router';

import App from '../components/App';
import Layout from '../components/Layout';
import NotFoundPage from '../components/NotFoundPage';

const routes = (
  <Router history={browserHistory}>
    <Route path="/" component={Layout}>
      <IndexRoute component={App} />
      <Route path="*" component={NotFoundPage} />
    </Route>
  </Router>
);

export default routes;

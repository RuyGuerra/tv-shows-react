import React from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';

import NotFound from '../../components/NotFound/NotFound';
import routes from '../../routes';
// import { element } from 'prop-types';
//<Route path={element.path} component={element.component} />
const Routes = props => {
  return (
    <Switch>
      {routes.map(({ exact, path, component }, index) => (
        <Route key={index} exact={exact} path={path} component={component} />
      ))}
      <Route path="/404" component={NotFound} />
      <Redirect to="/404" />
    </Switch>
  );
};

export default Routes;

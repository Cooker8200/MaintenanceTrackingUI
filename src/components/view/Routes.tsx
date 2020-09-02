import * as React from 'react';
import Home from './Home';
import NotFound from './NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';

const Routes: React.FC = (): React.ReactElement => (
  <BrowserRouter basename='banducci-enterprises'>
    <div>
      <Switch>
        <Route
          exact path ='/home'
          component={Home}
        />
        <Route
          exact path='*'
          component={NotFound}
        />
      </Switch>
    </div>
  </BrowserRouter>
)

export default Routes;

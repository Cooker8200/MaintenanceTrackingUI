import * as React from 'react';
import Home from './Home';
import NotFound from './NotFound';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
import Maintenance from './maintenance/Maintenance';
import Servsafe from './servsafe/Servsafe';
import HepA from './hep_a/HepA';

const Routes: React.FC = (): React.ReactElement => (
  <BrowserRouter basename='banducci-enterprises'>
    <div>
      <Switch>
        <Route
          exact path ='/home'
          component={Home}
        />
        <Route
          exact path ='/hep-a'
          component={HepA}
        />
        <Route
          exact path ='/maintenance'
          component={Maintenance}
        />
        <Route
          exact path ='/servsafe'
          component={Servsafe}
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

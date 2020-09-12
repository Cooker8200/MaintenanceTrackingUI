import * as React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { withRouter, RouteComponentProps } from 'react-router-dom';
import NavigationBreadcrumbs from './NavigationBreadcrumbs';

const MainAppBar: React.FC<RouteComponentProps> = ({ history }) => {
  return (
    <div>
      <Grid
        container
        alignContent='flex-start'
        alignItems='center'
        spacing={2}
        className='main-app-bar_container'
      >
        <Grid item>
          img...
        </Grid>
        <Grid item>
          <Typography>Banducci Enterprises</Typography>
        </Grid>
        {!window.location.pathname.includes('/home') &&
          <Grid item xs={12}>
            <NavigationBreadcrumbs />
          </Grid>
        }
      </Grid>
    </div>
  )
};

export default withRouter(MainAppBar);
import * as React from 'react';
import MainAppBar from './appbar/MainAppBar';
import { Grid, Typography } from '@material-ui/core';
import RecordsDropDown from './utils/RecordsDropDown';

const Home: React.FC = () => {


  return (
    <div>
      <MainAppBar />
      <Grid
        container
        justify='center'
        alignContent='center'
        alignItems='center'
        direction='column'
        spacing={10}
        className='home_container'
      >
        <Grid item xs={12} className='home_title'>
          <Typography variant='h3' className='home_main-title'>
            Banducci Enterprises
          </Typography>
          <Typography variant='body1' className='home_sub-title' color='textSecondary'>
            Welcome to your portal for restaurant mangement.  You are able to track maintenance, ServSafe and HepA records.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <RecordsDropDown />
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;

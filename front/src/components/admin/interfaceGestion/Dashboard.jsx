import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashboardAteliers from './DashboardAteliers';
import MenuAdmin from '../menuAdmin/MenuAdmin';
import DashboardParticipants from './DashboardParticipants';

const Dashboard = () => (
  <Grid container spacing={16}>
    <Grid item s={3} >
      <MenuAdmin />
    </Grid>
    <Grid item style={{ marginTop: 10 }} >
      <DashboardAteliers s={9} />
      <DashboardParticipants s={9} />
    </Grid>
  </Grid>
);

export default Dashboard;

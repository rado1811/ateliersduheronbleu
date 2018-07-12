import React from 'react';
import Grid from '@material-ui/core/Grid';
import DashboardAteliers from './DashboardAteliers';
import MenuAdmin from '../menuAdmin/MenuAdmin';
import DashboardParticipants from './DashboardParticipants';

const Dashboard = () => (
  <Grid container >
    <Grid item s={2} md={2}>
      <MenuAdmin />
    </Grid>
    <Grid item style={{ marginTop: 10 }} s={10} md={10}>
      <DashboardAteliers />
      <DashboardParticipants />
    </Grid>
  </Grid>
);

export default Dashboard;

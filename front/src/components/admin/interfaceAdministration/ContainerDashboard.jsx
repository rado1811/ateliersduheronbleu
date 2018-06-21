import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DashAteliers from './DashAteliers';
import DashIntervenants from './DashIntervenants';
import MenuAdmin from '../menuAdmin/MenuAdmin';

class ContainerDashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item s={4} >
          <MenuAdmin />
        </Grid>
        <Grid item style={{ marginTop: 10 }} >
          <DashAteliers s={4} />
        </Grid>
        <Grid item style={{ marginTop: 10 }} >
          <DashIntervenants s={4} />
        </Grid>
      </Grid>
    );
  }
}

export default ContainerDashboard;
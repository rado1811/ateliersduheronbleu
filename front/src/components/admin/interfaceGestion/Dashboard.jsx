import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DashboardAteliers from './DashboardAteliers';
import MenuAdmin from '../menuAdmin/MenuAdmin';

class Dashboard extends Component {
    constructor(props) {
      super(props);
      this.state = {};
    }
    render() {
      return (
        <Grid container spacing={16}>
          <Grid item s={3} >
            <MenuAdmin />
          </Grid>
          <Grid item >
            <DashboardAteliers s={9} />
          </Grid>
        </Grid>
      );
    }
  }
  
  export default Dashboard;
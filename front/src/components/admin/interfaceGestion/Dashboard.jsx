import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import DashboardAteliers from './DashboardAteliers';
import MenuAdmin from '../menuAdmin/MenuAdmin';
import DashboardParticipants from './DashboardParticipants';

class Dashboard extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container style={{ paddingRight: 20 }}>
        <Grid item s={2} md={2}>
          <MenuAdmin />
        </Grid>
        <Grid item style={{ marginTop: 40 }} s={10} md={10}>
          <DashboardAteliers />
          <DashboardParticipants history={this.props.history} />
        </Grid>
      </Grid>
    );
  }
}

export default Dashboard;

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from './MenuAdmin';
import Paper from '@material-ui/core/Paper';


class AdminAccueil extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container spacing={16}>
        <Grid item s={3}>
          <MenuAdmin />
        </Grid>
        <Grid item style={{ marginTop: 10 }}>
          <Grid item style={{ marginTop: 10 }}>
            <Paper
              style={{
                marginTop: 70,
              }}
            >
              <img
                src={`/images/heron.png`}
                style={{ width: '100', height: 'auto' }}
                alt="héron d'Isabelle Jono"
              />
            </Paper>
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default AdminAccueil;

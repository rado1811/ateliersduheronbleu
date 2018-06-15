import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormulaireIntervenant from './FormulaireIntervenant';
import MenuAdmin from '../menuAdmin/MenuAdmin';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container >
        <Grid item md={3}>
          <MenuAdmin />
        </Grid>
        <Grid item md={9}>
          <FormulaireIntervenant />
        </Grid>
      </Grid>
    );
  }
}

export default Admin;
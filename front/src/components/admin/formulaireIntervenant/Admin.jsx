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
        <Grid item xs={6}>
          <MenuAdmin />
        </Grid>
        <Grid item xs={18}>
          <FormulaireIntervenant />
        </Grid>
      </Grid>
    );
  }
}

export default Admin;
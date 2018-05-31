import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import FormulaireIntervenant from './FormulaireIntervenant';
import MenuAdmin from '../MenuAdmin/MenuAdmin';

class Admin extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container spacing={24} >
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
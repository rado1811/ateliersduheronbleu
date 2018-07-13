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
      <Grid container style={{ paddingRight: 30 }}>
        <Grid item md={2} s={2}>
          <MenuAdmin />
        </Grid>
        <Grid item md={10} s={10}>
          <FormulaireIntervenant />
        </Grid>
      </Grid>
    );
  }
}

export default Admin;
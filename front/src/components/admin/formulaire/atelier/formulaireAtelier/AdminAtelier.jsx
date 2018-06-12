import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import MenuAdmin from '../../../menuAdmin/MenuAdmin';
import FormAtelier from './FormAtelier';

class AdminAtelier extends Component {
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
          <FormAtelier />
        </Grid>
      </Grid>
    );
  }
}

export default AdminAtelier;
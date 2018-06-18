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
        <Grid item sm={6}>
          <MenuAdmin />
        </Grid>
        <Grid item sm={6}>
          <FormAtelier />
        </Grid>
      </Grid>
    );
  }
}

export default AdminAtelier;
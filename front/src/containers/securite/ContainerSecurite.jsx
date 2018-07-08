import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import Securite from './Securite';
import MenuAdmin from '../../components/admin/menuAdmin/MenuAdmin';

class ContainerSecurite extends Component {
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
          <Securite />
        </Grid>
      </Grid>
    );
  }
}

export default ContainerSecurite;

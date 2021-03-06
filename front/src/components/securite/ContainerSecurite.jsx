import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import SignUp from './SignUp';
import MenuAdmin from '../../components/admin/menuAdmin/MenuAdmin';

class ContainerSecurite extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  render() {
    return (
      <Grid container spacing={40}>
        <Grid item s={2}>
          <MenuAdmin />
        </Grid>
        <Grid item s={2} style={{ marginTop: 10 }}>
          <SignUp history={this.props.history} />
        </Grid>
      </Grid>
    );
  }
}

export default ContainerSecurite;

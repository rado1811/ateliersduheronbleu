import React, { Component } from 'react';
import UserList from '../../../containers/AtelierList';
import UserDetail from '../../../containers/AtelierDetail';
import Grid from 'material-ui/Grid';
import SimpleForm from '../../../containers/form';



class Ateliers extends Component {
  render() {
    return (
      <div>
        <div>
          <Grid container>
            <Grid item xs={2}>
              <UserList />
            </Grid>
            <Grid item xs={10}>
              <UserDetail />
            </Grid>
          </Grid>
          <SimpleForm />
        </div>
        <div />
      </div>
    );
  }
}

export default Ateliers;


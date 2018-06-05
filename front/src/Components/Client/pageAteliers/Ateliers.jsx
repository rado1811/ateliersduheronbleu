import React, { Component } from 'react';
import AtelierList from '../../../containers/AtelierList';
import AtelierDetail from '../../../containers/AtelierDetail';
import Grid from 'material-ui/Grid';
import SimpleForm from '../../../containers/Form';
import './Ateliers.css';

class Ateliers extends Component {
  render() {
    return (
      <div style={{ background: '#F2F2F2' }}>
        <div>
          <Grid container>
            <Grid item md={2}>
              <AtelierList />
            </Grid>
            <Grid item md={10}>
              <AtelierDetail />
            </Grid>
          </Grid>
          <Grid className="form" container spacing={24} direction="column" align="center" >
            <Grid item xs={12} form style={{ background: '#F2F2F2' }}>
              <SimpleForm />
            </Grid>
          </Grid>
        </div>
      </div>
  );
};
}

export default Ateliers;


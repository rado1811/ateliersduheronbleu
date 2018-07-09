import React from 'react';
import Grid from 'material-ui/Grid';
import AteliersList from '../../../containers/AtelierList';
import AtelierDetail from '../../../containers/AtelierDetail';
import FormParticipants from './FormParticipants';
import Footer from '../footer/Footer';
import TemporaryDrawer from '../navbar/TemporaryDrawer';

import './Ateliers.css';

const Ateliers = () => (
  <div style={{ background: '#F2F2F2', marginTop: 60 }}>
    <TemporaryDrawer />
    <div className="shapeAteliers">
      <Grid container>
        <Grid item md={2}>
          <AteliersList />
        </Grid>
        <Grid item md={10}>
          <AtelierDetail />
        </Grid>
      </Grid>
      <Grid
        className="form"
        container
        spacing={24}
        direction="column"
        align="center"
      >
        <Grid item xs={12} style={{ background: '#F2F2F2' }}>
          <FormParticipants />
        </Grid>
      </Grid>
    </div>
    <Footer />
  </div>
);

export default Ateliers;

import React from 'react';
import { connect } from 'react-redux';
import Grid from 'material-ui/Grid';

import './AteliersDetails.css';

const AteliersDetail = (props) => {
  const { ateliers } = props;
  return (
    <div className="AteliersDetail">
      {!ateliers ? (
        <div>
          <h3>Les Ateliers du Héron Bleu</h3>
          Choisissez un atelier
        </div>
      ) : (
        <div>
          <Grid
            container
            style={{
              height: '100%',
            }}
          >
            <Grid className="details" item md={6} xs={1}>
              <div>
                <img src={ateliers.image} alt="heron" />
              </div>
            </Grid>
            <Grid className="contenu" item md={6} xs={1} key={ateliers.key}>
              <div>
                <h3>{ateliers.nom}</h3>
                <h4>{ateliers.debut}</h4>
                <b>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                    width="5%"
                    alt="heron"
                  />
                  En chemin, vous trouverez :
                </b>
                <p>{ateliers.chemin}</p>
                <b>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                    width="5%"
                    alt="iconHeron"
                  />
                  Programme :
                </b>
                <p>{ateliers.programme}</p>
                <b>
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                    width="5%"
                    alt="iconHeron"
                  />
                  Intervenants :
                </b>
                <p>{ateliers.intervenants}</p>
              </div>
            </Grid>
          </Grid>
        </div>
      )};
    </div>
  );
};

// "state.activeUser" is set in reducers/index.js
function mapStateToProps(state) {
  return { ateliers: state.activeAteliers };
}

export default connect(mapStateToProps)(AteliersDetail);
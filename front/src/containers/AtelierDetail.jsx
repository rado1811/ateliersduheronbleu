import React, { Component } from 'react';
import { connect } from 'react-redux';
import { fetchAteliers } from '../actions/ateliers';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import './AteliersDetails.css';

class AtelierDetail extends Component {
  componentDidMount() {
    this.props.fetchAteliers();
  }
  render() {
    return (
      <div className="AteliersDetail">
        {!this.props.ateliers ? (
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
                  <img src={this.props.ateliers.image} alt="heron" />
                </div>
              </Grid>
              <Grid className="contenu" item md={6} xs={1} key={this.props.ateliers.key}>
                <div>
                  <h3>{this.props.ateliers.nom}</h3>
                  <h4>{this.props.ateliers.debut}</h4>
                  <b>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                      width="5%"
                      alt="heron"
                    />
                    En chemin, vous trouverez :
                  </b>
                  <p>{this.props.ateliers.chemin}</p>
                  <b>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                      width="5%"
                      alt="iconHeron"
                    />
                    Programme :
                  </b>
                  <p>{this.props.ateliers.programme}</p>
                  <b>
                    <img
                      src="https://cdn4.iconfinder.com/data/icons/birds-1/154/bird-stork-heron-pelican-512.png"
                      width="5%"
                      alt="iconHeron"
                    />
                    Intervenants :
                  </b>
                  <p>{this.props.ateliers.intervenants}</p>
                </div>
              </Grid>
            </Grid>
          </div>
        )};
      </div>
    );
  };
}

AtelierDetail.propTypes = {
  fetchAteliers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { ateliers: state.activeAteliers };
}

export default connect(mapStateToProps, { fetchAteliers })(AtelierDetail);
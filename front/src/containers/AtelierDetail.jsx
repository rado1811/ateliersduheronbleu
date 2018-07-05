import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from '@material-ui/core/Paper';
import Moment from 'react-moment';
import { fetchAteliers } from '../actions/ateliers';
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
            <Paper elevation={4} style={{ padding: 20 }}>
              <Grid
                container
                style={{
                  height: '80vh',
                  width: 'auto',
                }}
              >
                <Grid media="screen and (max-width: 440px)" className="image-container" item md={6} sm={1}>
                  <div>
                    <img src="../images/landing.jpg" alt="heron" style={{ height: '80vh', width: '80vw' }} className="images2" />
                  </div>
                  <div
                    className="overlay2"
                    style={{
                            height: '20vh', width: '60vw', fontSize: 40, marginLeft: '20vw', fontFamily: 'Montserrat'
                            ,
                          }}
                  >
                    <h3>Les Ateliers du Héron Bleu</h3>
                  Choisissez un atelier
                  </div>
                </Grid>
              </Grid >
            </Paper>
          </div>
        ) : (
          <div>
            <Paper elevation={4} style={{ padding: 20 }}>

              <Grid
                container
                style={{
                height: '80vh',
                width: 'auto',
              }}
              >
                <Grid media="screen and (max-width: 440px)" className="image-container" item md={6} sm={1} key={this.props.ateliers.key}>
                  <div>
                    <img src={`/images/${this.props.ateliers.photo}`} alt="heron" style={{ height: '80vh', width: '80vw' }} className="images" />
                  </div>
                </Grid>
                <Grid >
                  <div
                    className="overlay"
                    style={{
                            height: '20vh', width: '60vw', fontSize: 14, marginLeft: '10vw', fontFamily: 'Montserrat'
                            ,
                          }}
                  >
                    <h1>{this.props.ateliers.nom}</h1>
                    <h3><Moment format="DD/MM/YYYY">{this.props.ateliers.debut}</Moment></h3>
                    <b>
                      <img
                        src="../images/logoHeron.png"
                        width="4%"
                        alt="heron"
                      />
                      <h3>En chemin, vous trouverez :</h3>
                    </b>
                    <p>{this.props.ateliers.contenu}</p>
                    <b>
                      <h3>Programme :</h3>
                    </b>
                    <p>{this.props.ateliers.programme}</p>
                    <b>
                      <h3>Intervenants :</h3>
                    </b>
                    <p>{this.props.ateliers.intervenant}</p>
                  </div>
                </Grid>
              </Grid>
            </Paper>
          </div>
        )}
      </div>
    );
  };
}
AtelierDetail.propTypes = {
  fetchAteliers: PropTypes.func.isRequired,
}

function mapStateToProps(state) {
  return { ateliers: state.activeAteliers };
}

export default connect(mapStateToProps, { fetchAteliers })(AtelierDetail);

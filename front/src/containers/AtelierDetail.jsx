import React, { Component } from 'react';
import { connect } from 'react-redux';
import { HashLink as Link } from 'react-router-hash-link';
import PropTypes from 'prop-types';
import Grid from 'material-ui/Grid';
import Paper from '@material-ui/core/Paper';
import Button from '@material-ui/core/Button';
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
                <Grid
                  media="screen and (max-width: 440px)"
                  className="image-container"
                  item
                  md={6}
                  sm={1}
                >
                  <div>
                    <img
                      src="../images/logoHeron.png"
                      alt="heron"
                      style={{ height: '80vh', width: '80vw' }}
                      className="images2"
                    />
                  </div>
                  <div
                    className="overlay2"
                    style={{
                      height: '20vh',
                      width: '60vw',
                      fontSize: 40,
                      marginLeft: '20vw',
                      fontFamily: 'Montserrat',
                    }}
                  >
                    <h3>Les Ateliers du Héron Bleu</h3>
                    Choisissez un atelier
                  </div>
                </Grid>
              </Grid>
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
                    <img src={`/images/${this.props.ateliers.photo_atelier}`} alt="heron" style={{ height: '80vh', width: '80vw' }} className="images" />
                  </div>
                </Grid>
                <Grid>
                  <div
                    className="overlay"
                    style={{
                        height: '50vh',
                        width: '60vw',
                        fontSize: 14,
                        marginLeft: '35vw',
                        fontFamily: 'Montserrat',
                      }}
                  >
                    <h1>{this.props.ateliers.nom_atelier}</h1>
                    <h3>
                      <Moment format="DD/MM/YYYY">
                        {this.props.ateliers.debut}
                      </Moment>
                    </h3>
                    <b>
                      <img
                        src="../images/logoHeron.png"
                        width="4%"
                        alt="heron"
                      />
                      <b>
                        <h3>Programme :</h3>
                      </b>
                      <p>{this.props.ateliers.programme}</p>
                      <b>
                        <h3>En chemin, vous trouverez :</h3>
                      </b>
                      <p>{this.props.ateliers.contenu}</p>
                      <h3>Intervenants :</h3>
                    </b>
                    <p>{this.props.ateliers.nom_intervenant}</p>
                    <h3>Prix : {this.props.ateliers.prix}€</h3>
                  </div>
                </Grid>
              </Grid>
              <Link to="ateliers#formParticipants" style={{ textDecoration: 'none' }}>
                <Button
                  size="small"
                  style={{ backgroundColor: '#B2C4CB', color: 'white', textDecoration: 'none' }}
                >
                    Pré-réserver
                </Button>
              </Link>

            </Paper>
          </div>
          )}
      </div>
    );
  }
}
AtelierDetail.propTypes = {
  fetchAteliers: PropTypes.func.isRequired,
  ateliers: PropTypes.shape({
    debut: PropTypes.string.isRequired,
    formule: PropTypes.string.isRequired,
    id_atelier: PropTypes.number.isRequired,
    id_intervenant: PropTypes.number.isRequired,
    lieu: PropTypes.string.isRequired,
    nb_participants: PropTypes.number.isRequired,
    nom_atelier: PropTypes.string.isRequired,
    nom_intervenant: PropTypes.string.isRequired,
    photo_atelier: PropTypes.string.isRequired,
    place_disponibles: PropTypes.number.isRequired,
    prix: PropTypes.number.isRequired,
    programme: PropTypes.string.isRequired,
    contenu: PropTypes.string.isRequired,
  }).isRequired,
};

function mapStateToProps(state) {
  return { ateliers: state.activeAteliers };
}

export default connect(
  mapStateToProps,
  { fetchAteliers },
)(AtelierDetail);

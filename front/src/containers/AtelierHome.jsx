import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import MediaQuery from 'react-responsive';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';
import AtelierVignette from '../components/client/ateliersHome/AtelierVignette';
import { fetchAteliers } from '../actions/ateliers';
import BoutonContact from '../components/client/BoutonContact';
import Footer from '../components/client/footer/Footer';
import './AtelierHome.css';
import TemporaryDrawer from '../components/client/navbar/TemporaryDrawer';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class AtelierHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleAteliers: false,
    };
  }

  componentDidMount() {
    this.props.fetchAteliers();
  }

  getUpcomingAteliers() {
    const ateliers = this.state.toggleAteliers
      ? this.props.ateliers
      : this.props.ateliers.slice(0, 3);
    const iconButton = this.state.toggleAteliers ? <RemoveIcon /> : <AddIcon />;
    return (
      <Grid id="ateliers" container spacing={16} justify="center">
        {ateliers.map((atelier, i) => (
          <AtelierVignette
            key={atelier.id_atelier}
            name={atelier.nom_atelier}
            date={atelier.debut}
            image={`/images/${atelier.photo_atelier}`}
            intervenant_nom={atelier.nom_intervenant}
            intervenant_prenom={atelier.prenom}
            places_disponibles={atelier.place_disponibles}
            indexAtelier={i}
          />
        ))}
        <Button
          variant="fab"
          color="primary"
          style={{ backgroundColor: '#B2C4CB' }}
          onClick={() => this.toggleAteliers()}
        >
          {iconButton}
        </Button>
      </Grid>
    );
  }

  toggleAteliers() {
    const doesShow = this.state.toggleAteliers;
    this.setState({
      toggleAteliers: !doesShow,
    });
  }

  render() {
    return (
        <div>
          <TemporaryDrawer />
            <MediaQuery query="(min-device-width: 1224px)">
              <div
                className="video-container"
                style={{
                marginBottom: 100,
                marginTop: -70,
                }}
              >
                <div>You are a tablet or mobile phone</div>
                <video
                  id="background-video"
                  style={{
                    height: 'auto',
                    width: '100%',
                    zindex: '0',
                  }}
                  loop
                  muted
                  autoPlay
                >
                  <source src="../images/sunwaves.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </div>
            </MediaQuery>
          <MediaQuery query="(max-device-width: 1224px)">
            <div
              className="video-container"
              style={{
              }}
            >
              <img
                src="../images/home.jpg"
                alt="heron"
                style={{ height: '100vh', width: '100vw' }}
                className="images2"
              />
            </div>
          </MediaQuery>
          <div
            className="overlay"
            style={{
              fontFamily: 'Dancing Script',
              fontSize: '3vw',
              padding: '150px',
            }}
          >
          <h2 style={{ paddingLeft: '150px' }}>
            {' '}
            Ateliers "Bien-être et Créativité"
          </h2>
            <h3
              className="sousTitre"
              style={{ fontFamily: 'Dancing Script', paddingLeft: '150px' }}
            >
              {' '}
            Le Teich
            </h3>
          </div>
          <Link to="#ateliers">
            <i className="fas fa-angle-double-down" />
          </Link>
          {this.getUpcomingAteliers()}
          <BoutonContact />
          <Footer />
        </div>
    );
  }
}

AtelierHome.propTypes = {
  ateliers: PropTypes.arrayOf(Array).isRequired,
  fetchAteliers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { ateliers: state.ateliers.ateliers };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { fetchAteliers }
  )
)(AtelierHome);

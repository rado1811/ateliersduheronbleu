import React, { Component } from 'react';
import { HashLink as Link } from 'react-router-hash-link';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
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
            name={atelier.nom}
            date={atelier.debut}
            image={`/images/${atelier.photo}`}
            intervenant={atelier.id_intervenant}
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
    console.log('ici ', this.props);
    return (
      <div>
        <div
          className="video-container"
          style={{
            marginBottom: 100,
            marginTop: -70,
          }}
        >
          <video
            id="background-video"
            style={{
              height: 'auto',
              width: '100%',
            }}
            loop
            muted
            autoPlay
          >
            <source src="../images/sunwaves.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <div className="overlay">
          <p style={{ fontFamily: 'Montserrat' }}>
            {' '}
            Ateliers "Bien-être et Créativité"
          </p>
          <p className="sousTitre" style={{ fontFamily: 'Montserrat' }}>
            {' '}
            Le Teich
          </p>
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
  ateliers: PropTypes.arrayOf(
    PropTypes.shape({
      contenu: PropTypes.string.isRequired,
      debut: PropTypes.string.isRequired,
      formule: PropTypes.string.isRequired,
      lieu: PropTypes.string.isRequired,
      nb_participants: PropTypes.number.isRequired,
      nom: PropTypes.string.isRequired,
      photo: PropTypes.string.isRequired,
      place_disponibles: PropTypes.number.isRequired,
      id_atelier: PropTypes.number.isRequired,
      id_intervenant: PropTypes.number.isRequired,
      nom_intervenant: PropTypes.string.isRequired,
      prix: PropTypes.number.isRequired,
      programme: PropTypes.string.isRequired,
    })
  ).isRequired,
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

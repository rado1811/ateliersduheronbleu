import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AtelierVignette from '../components/client/ateliersHome/AtelierVignette';
import { fetchAteliers } from '../actions/ateliers';
import BoutonContact from '../components/client/BoutonContact';

const styles = theme => ({
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

  toggleAteliers() {
    const doesShow = this.state.toggleAteliers;
    this.setState({ toggleAteliers: !doesShow });
  }

  render() {
    const firstAteliers = this.props.ateliers.slice(0, 3);
    let upcomingAteliers = (
      <Grid container justify="center">
        {firstAteliers.map(ateliers => (
          <AtelierVignette
            key={ateliers.id_atelier}
            name={ateliers.nom}
            date={ateliers.debut}
            image={ateliers.photo}
            intervenant={ateliers.id_intervenant}
            places_disponibles={ateliers.place_disponibles}
          />
        ))}
        <Button
          variant="fab"
          color="primary"
          aria-label="add"
          onClick={() => this.toggleAteliers()}
        >
          <AddIcon />
        </Button>
      </Grid>
    );

    if (this.state.toggleAteliers) {
      upcomingAteliers = (
        <Grid container justify="center">
          {this.props.ateliers.map(ateliers => (
            <AtelierVignette
              key={ateliers.id_atelier}
              name={ateliers.nom}
              date={ateliers.debut}
              image={ateliers.photo}
              intervenant={ateliers.id_intervenant}
              places_disponibles={ateliers.place_disponibles}
            />
          ))}
          <Button
            variant="fab"
            color="secondary"
            aria-label="add"
            onClick={this.toggleAteliers}
          >
            <AddIcon />
          </Button >
        </Grid>
      );
    }

    return (
      <div>
        <div style={{ marginBottom: 100 }}>
          <video 
            id="background-video" 
            style={{height: 'auto',
              width:'100%' }} 
            loop 
            muted 
            autoPlay
          >
            <source src="../images/video.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <Grid container spacing={16}>
          {upcomingAteliers}
        </Grid>
        <BoutonContact />
      </div>
    );
  }
}

AtelierHome.propTypes = {
  ateliers: PropTypes.arrayOf(Array).isRequired,
  fetchAteliers: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return {
    ateliers: state.ateliers.ateliers,
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps, { fetchAteliers }),
)(AtelierHome);

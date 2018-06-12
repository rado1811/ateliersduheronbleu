import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import AtelierVignette from '../components/client/ateliersHome/AtelierVignette';
import { HashLink as Link } from 'react-router-hash-link';


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

  toggleAteliers= () => {
    const doesShow = this.state.toggleAteliers;
    this.setState({ toggleAteliers: !doesShow });
  }

  render() {    
    let firstAteliers = this.props.ateliers.slice(0, 3);
    let upcomingAteliers = (
      <Grid id='ateliers' container justify="center">
        {firstAteliers.map((ateliers) => {
          return (
            <AtelierVignette
              key={ateliers.key}
              name={ateliers.nom_atelier}
              date={ateliers.date}
              image={ateliers.image}
              intervenant={ateliers.intervenants}
              descriptif={ateliers.programme}
            />
          );
        })}
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
          {this.props.ateliers.map((ateliers) => {
            return (
              <AtelierVignette
                key={ateliers.key}
                name={ateliers.nom_atelier}
                date={ateliers.date}
                image={ateliers.image}
                intervenant={ateliers.intervenants}
                descriptif={ateliers.programme}
              />
            );
          })}
          <Button
            textAlign='center'
            variant="fab"
            color="secondary"
            aria-label="add"
            onClick={this.toggleAteliers}
          >
            <AddIcon />
          </Button>
        </Grid>
      );
    }

    return (
      <div>
        <div style={{marginBottom: 100}}>
          <video id="background-video" style={{height: 'auto',
          width:'100%' }} loop muted autoPlay>
            <source src="../images/video.mp4" type="video/mp4"/>
            Your browser does not support the video tag.
          </video>
          <p className='overlay'>Ateliers "Bien-être et Créativité"</p>
          <Link to='#ateliers'><i className="fas fa-angle-double-down" ></i>
          </Link>

        </div>
        <Grid container spacing={16}>
          {upcomingAteliers}
        </Grid>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    ateliers: state.ateliers
  };
}

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(AtelierHome);

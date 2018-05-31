import React, { Component } from 'react';
import compose from 'recompose/compose';
import { connect } from 'react-redux';
// import './atelierHome.css';
import AtelierVignette from '../Components/Client/ateliersHome/atelierVignette';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';

const styles = (theme) => ({
  button: {
    margin: theme.spacing.unit,
  },
});

class AtelierHome extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showAteliers: false,
    };
  }

  showAteliers = () => {
    const doesShow = this.state.showAteliers;
    this.setState({ showAteliers: !doesShow });
  };

  hideAteliers = () => {
    const doesShow = this.state.showAteliers;
    this.setState({ showAteliers: !doesShow });
  };

  render() {
    let firstAteliers = this.props.ateliers.slice(0, 3);
    let upcomingAteliers = (
      <Grid container justify="center">
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
          onClick={this.showAteliers}
        >
          <AddIcon />
        </Button>
      </Grid>
    );

    if (this.state.showAteliers) {
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
            size="small"
            variant="fab"
            color="secondary"
            aria-label="add"
            onClick={this.hideAteliers}
          >
            <AddIcon />
          </Button>
        </Grid>
      );
    }

    return (
      <Grid container spacing={16}>
        {upcomingAteliers}
      </Grid>
    );
  }
}

function mapStateToProps(state) {
  return {
    ateliers: state.ateliers
  };
}

// function matchDispatchToProps(dispatch) {
//   return bindActionCreators({selectUser: selectUser}, dispatch)
// }

export default compose(
  withStyles(styles),
  connect(mapStateToProps)
)(AtelierHome);

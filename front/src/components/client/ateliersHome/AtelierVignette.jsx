import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Moment from 'react-moment';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import compose from 'recompose/compose';
import { selectAteliers } from '../../../actions/index';

const Reserver = (props) => <Link to="/ateliers" {...props} />;
const Atelier = (props) => <Link to="/ateliers" {...props} />;

const styles = {
  item: {
    margin: '20px',
  },
  card: {
    maxWidth: 345,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
};

const AtelierVignette = (props) => {
  const { classes } = props;
  return (
    <Grid
      item
      md={4}
      sm={12}
      style={{
        padding: 10,
      }}
    >
      <Card
        className={classes.card}
        justify="center"
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
        }}
      >
        <CardMedia
          className={classes.media}
          image={props.image}
          title="Héron"
        />
        <CardContent>
          <Typography gutterBottom variant="headline" component="h2">
            {props.name}
          </Typography>
          <Typography component="h3">
            <Moment format="DD/MM/YYYY">{props.date}</Moment>
          </Typography>

          <Typography component="h3">
            Places disponibles: {props.places_disponibles} <br />
            Co-animation: {props.intervenant}, Isabelle Jono
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            size="small"
            style={{ backgroundColor: '#B2C4CB', color: 'white' }}
            component={Reserver}
          >
            Pré-réserver
          </Button>
          <Button
            size="small"
            style={{ backgroundColor: '#B2C4CB', color: 'white' }}
            onClick={() => {
              props.selectAteliers(props.ateliers[props.indexAtelier]);
            }}
            component={Atelier}
          >
            En savoir plus
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

AtelierVignette.propTypes = {
  image: PropTypes.string.isRequired,
  intervenant: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  indexAtelier: PropTypes.number.isRequired,
  date: PropTypes.string.isRequired,
  places_disponibles: PropTypes.number.isRequired,
  selectAteliers: PropTypes.func.isRequired,
  classes: PropTypes.shape({
    item: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
  }).isRequired,
  ateliers: PropTypes.arrayOf(PropTypes.shape({
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
  })).isRequired,
};

function mapStateToProps(state) {
  return { ateliers: state.ateliers.ateliers };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      selectAteliers,
    },
    dispatch,
  );
}
export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps,
  ),
)(AtelierVignette);

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
          <Typography component="h3">{props.date}</Typography>
          <Typography component="h3">
            Places disponibles: {props.places_disponibles} <br />
            Co-animation: {props.intervenant}, Isabelle Jono
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" color="primary" onClick={props.booking}>
            Pré-réserver
          </Button>
          <Button size="small" color="primary" onClick={props.moreDetails}>
            En savoir plus
          </Button>
        </CardActions>
      </Card>
    </Grid>
  );
};

AtelierVignette.propTypes = {
  image: PropTypes.string.isRequired,
  intervenant: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  places_disponibles: PropTypes.number.isRequired,
  classes: PropTypes.shape({
    item: PropTypes.string.isRequired,
    card: PropTypes.string.isRequired,
    media: PropTypes.string.isRequired,
  }).isRequired,
  //  booking: PropTypes.func,isRequired
  // moreDetails: PropTypes.func,isRequired
};

export default withStyles(styles)(AtelierVignette);

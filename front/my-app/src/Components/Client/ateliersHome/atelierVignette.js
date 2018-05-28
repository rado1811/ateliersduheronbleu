import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import './atelierVignette.css';

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
    <Grid item md={4} sm={12}>
      <Card className={classes.card} justify="center">
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

export default withStyles(styles)(AtelierVignette);

import React from 'react';
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
import { selectAteliers } from '../../../actions/index';

const Reserver = props => <Link to="/ateliers/#formParticipants" {...props} />;
const Atelier = props => <Link to="/ateliers" {...props} />;

const AtelierVignette = props => (
  <Grid
    item
    md={4}
    sm={12}
    style={{
      padding: 10,
    }}
  >
    <Card
      justify="center"
      style={{
        minHeight: '65vh',
        marginLeft: 'auto',
        marginRight: 'auto',
        maxWidth: '345',
      }}
    >
      <CardMedia
        image={props.image}
        title="Héron"
        style={{
          height: '0',
          paddingTop: '56.25%',
        }}
      />
      <CardContent>
        <Typography style={{ height: 64 }} gutterBottom variant="headline" component="h2">
          {props.name}
        </Typography>
        <Typography component="h3">
          <Moment format="DD/MM/YYYY">{props.date}</Moment>
        </Typography>

        <Typography component="h3">
          Co-animation: {props.intervenant_nom}
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
            window.scrollTo(0, 0);
          }}
          component={Atelier}
        >
          En savoir plus
        </Button>
      </CardActions>
    </Card>
  </Grid>
);

AtelierVignette.propTypes = {
  image: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  indexAtelier: PropTypes.number.isRequired,
  intervenant_nom: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  selectAteliers: PropTypes.func.isRequired,
  ateliers: PropTypes.arrayOf(Array).isRequired,
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
export default connect(mapStateToProps, mapDispatchToProps)(AtelierVignette);

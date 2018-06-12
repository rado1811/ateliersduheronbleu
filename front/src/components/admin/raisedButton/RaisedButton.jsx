import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function RaisedButtons(props) {
  const { classes } = props;
  return (
    <div>
      <Button variant="raised" color="primary" className={classes.button}>
          Primary
      </Button>
    </div>
  );
}

RaisedButtons.propTypes = {
  classes: PropTypes.shape.isRequired,
};


export default withStyles(styles)(RaisedButtons);
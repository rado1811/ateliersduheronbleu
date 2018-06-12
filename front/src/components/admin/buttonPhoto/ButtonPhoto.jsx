
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import PhotoCamera from '@material-ui/icons/PhotoCamera';


const styles = theme => ({
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
});

function BouttonPhoto(props) {
  const { classes } = props;
  return (
    <div>
      <IconButton color="primary" className={classes.button} component="span">
        <PhotoCamera />
      </IconButton>
    </div>
  );
}
BouttonPhoto.propTypes = {
  classes: PropTypes.shape.isRequired,
};
export default withStyles(styles)(BouttonPhoto);
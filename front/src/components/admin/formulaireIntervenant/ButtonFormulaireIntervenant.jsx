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
function ButtonFormulaireIntervenant(props) {
  const { classes } = props;
  return (
    <Button
      type="submit"
      variant="raised"
      color="primary"
      className={classes.button}
    >
      Submit
    </Button>
  );
}
ButtonFormulaireIntervenant.propTypes = {
  classes: PropTypes.shape({
    button: PropTypes.string.isRequired,
    input: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(ButtonFormulaireIntervenant);

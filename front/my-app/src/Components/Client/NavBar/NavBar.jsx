// React
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Grid from '@material-ui/core/Grid';

// Aller sur le lien ci-dessous pour tester une navbar responsive
// https://github.com/TarikHuber/material-ui-responsive-drawer

const styles = {
  root: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    boxSizing: 'border-box', // Prevent padding issue with the Modal and fixed positioned AppBar.
    flexShrink: 0,
  },
  flex: {
    flex: 1,
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
  positionSticky: {
    position: 'sticky',
    top: 0,
    left: 'auto',
    right: 0,
  },
};

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <IconButton
                className={classes.menuButton}
                color="inherit"
                aria-label="Menu"
              >
                <MenuIcon />
              </IconButton>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Title
              </Typography>
              <Button color="inherit">Accueil</Button>
              <Button color="inherit">Ateliers</Button>
              <Button color="inherit">Concept</Button>
              <Button color="inherit">Intervenants</Button>
              <Button color="inherit">Contact</Button>
            </Toolbar>
          </AppBar>
        </Grid>
      </Grid>
    </div>
  );
}

ButtonAppBar.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ButtonAppBar);

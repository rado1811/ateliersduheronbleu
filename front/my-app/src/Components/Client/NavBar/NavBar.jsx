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
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';

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

const MyHome = props => <Link to="/" {...props} />;
const Mytest = props => <Link to="/test" {...props} />;
const MyPage2 = props => <Link to="/page2" {...props} />;
const MyContact = props => <Link to="/" {...props} />;

function ButtonAppBar(props) {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Grid container className={classes.root}>
        <Grid item xs={12}>
          <AppBar position="static">
            <Toolbar>
              <Hidden smUp>
                <IconButton
                  className={classes.menuButton}
                  color="inherit"
                  aria-label="Menu"
                >
                  <MenuIcon />
                </IconButton>
              </Hidden>
              <Typography
                variant="title"
                color="inherit"
                className={classes.flex}
              >
                Atelier du Héron Bleu
              </Typography>
              <Hidden xsDown>
                <Button color="inherit" component={MyHome}>
                  Home
                </Button>
              </Hidden>
              <Hidden xsDown>
                <Button color="inherit" component={Mytest}>
                  Test
                </Button>
              </Hidden>
              <Hidden xsDown>
                <Button color="inherit" component={MyPage2}>
                  Page 2
                </Button>
              </Hidden>
              <Hidden xsDown>
                <Button color="inherit" component={MyContact}>
                  Contact{' '}
                </Button>
              </Hidden>
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

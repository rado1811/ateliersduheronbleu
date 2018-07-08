import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import Grid from '@material-ui/core/Grid';

const Dashboard = (props) => <Link to="/admin/gestion" {...props} />;
const ContainerDashboard = (props) => (
  <Link to="/admin/administration" {...props} />
);
const MyAccueil = (props) => <Link to="/" {...props} />;

const Securite = (props) => <Link to="/admin/securite" {...props} />;

const drawerWidth = 150;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
    height: 430,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
    width: '100%',
  },
  appBar: {
    position: 'absolute',
    marginLeft: drawerWidth,
    [theme.breakpoints.up('md')]: {
      width: `calc(100% - ${drawerWidth}px)`,
    },
  },
  navIconHide: {
    [theme.breakpoints.up('md')]: {
      display: 'none',
    },
  },
  toolbar: theme.mixins.toolbar,
  drawerPaper: {
    width: drawerWidth,
    [theme.breakpoints.up('md')]: {
      position: 'relative',
    },
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
  },
});

class MenuAdmin extends React.Component {
  state = {
    mobileOpen: false,
  };

  handleDrawerToggle = () => {
    this.setState({ mobileOpen: !this.state.mobileOpen });
  };

  render() {
    const { classes, theme } = this.props;

    const drawer = (
      <div className={classes.root}>
        <MenuList>
          <br />
          <MenuItem button component={Dashboard}>
            Gestion
          </MenuItem>
          <Divider />
          <br />
          <MenuItem button component={ContainerDashboard}>
            Administration
          </MenuItem>
          <Divider />
          <br />
          <MenuItem button component={Securite}>
            Sécurité
          </MenuItem>
          <br />
          <Divider />
          <br />
          <MenuItem button component={MyAccueil}>
            Déconnexion
          </MenuItem>
          <br />
        </MenuList>
      </div>
    );

    return (
      <Grid container spacing={16}>
        <Grid item s={3}>
          <div>
            <AppBar>
              <Toolbar>
                <IconButton
                  color="inherit"
                  aria-label="open drawer"
                  onClick={this.handleDrawerToggle}
                  className={classes.navIconHide}
                >
                  <MenuIcon />
                </IconButton>
              </Toolbar>
            </AppBar>
            <Hidden mdUp>
              <Drawer
                variant="temporary"
                anchor={theme.direction === 'rtl' ? 'right' : 'left'}
                open={this.state.mobileOpen}
                onClose={this.handleDrawerToggle}
                classes={{
                  paper: classes.drawerPaper,
                }}
                ModalProps={{
                  keepMounted: true, // Better open performance on mobile.
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
            <Hidden smDown implementation="css">
              <Drawer
                variant="permanent"
                open
                classes={{
                  paper: classes.drawerPaper,
                }}
              >
                {drawer}
              </Drawer>
            </Hidden>
          </div>
        </Grid>

      </Grid>
    );
  }
}

MenuAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuAdmin);

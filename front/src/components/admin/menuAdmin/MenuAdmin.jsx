import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Hidden from '@material-ui/core/Hidden';
import Divider from '@material-ui/core/Divider';
import MenuIcon from '@material-ui/icons/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
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
        <MenuList >
          <br />         
          <MenuItem key="/admin/gestion">
            <NavLink to="/admin/gestion">
          Gestion
            </NavLink>
          </MenuItem>
          <Divider />
          <br />
          <MenuItem key="/admin/administration">
            <NavLink to="/admin/administration">
          Administration
            </NavLink>
          </MenuItem>
          <Divider />
          <br />
          <MenuItem key="/admin/intervenant">
            <NavLink to="/admin/intervenant">
              Intervenants
            </NavLink>
          </MenuItem>
          <Divider />
          <br />
          <MenuItem key="/admin/ateliers">
            <NavLink to="/admin/ateliers">
              Ateliers
            </NavLink>
          </MenuItem>
          <br />
          <Divider />
          <MenuItem>Newletters</MenuItem>
          <br />
        </MenuList>
      </div>
    );

    return (
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
    );
  }
}

MenuAdmin.propTypes = {
  classes: PropTypes.object.isRequired,
  theme: PropTypes.object.isRequired,
};

export default withStyles(styles, { withTheme: true })(MenuAdmin);
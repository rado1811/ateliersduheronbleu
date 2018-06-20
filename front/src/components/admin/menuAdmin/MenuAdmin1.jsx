import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuList from '@material-ui/core/MenuList';
import { NavLink } from 'react-router-dom';

const drawerWidth = 240;

const styles = theme => ({
  root: {
    flexGrow: 1,
    height: 800,
    zIndex: 1,
    overflow: 'hidden',
    position: 'relative',
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
  },
  drawerPaper: {
    position: 'relative',
    width: drawerWidth,
  },
  content: {
    flexGrow: 1,
    backgroundColor: theme.palette.background.default,
    padding: theme.spacing.unit * 3,
    minWidth: 0, 
  },
  toolbar: theme.mixins.toolbar,
});

function MenuAdmin(props) {
  const { classes } = props;
  return (


    <div>
      <AppBar position="absolute" className={classes.appBar}>
        <Toolbar>
          <Typography variant="title" color="inherit" noWrap>
            Interface Administration
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <div className={classes.toolbar} />
        <MenuList >
          <br />         
          <MenuItem key="/admin/gestion">
            <NavLink to="/admin/gestion">
          Gestion
            </NavLink>
          </MenuItem>
          <br />
          <MenuItem key="/admin/intervenant">
            <NavLink to="/admin/intervenant">
              Intervenants
            </NavLink>
          </MenuItem>
          <br />
          <MenuItem key="/admin/ateliers">
            <NavLink to="/admin/ateliers">
              Ateliers
            </NavLink>
          </MenuItem>
          <br />
          <MenuItem>Newletters</MenuItem>
          <br />
        </MenuList>
      </Drawer>
    </div>

  );
}

MenuAdmin.propTypes = {
  classes: PropTypes.shape({
    root: PropTypes.string.isRequired,
    appBar: PropTypes.string.isRequired,
    drawerPaper: PropTypes.string.isRequired,
    content: PropTypes.string.isRequired,
    toolbar: PropTypes.string.isRequired,
  }).isRequired,
};

export default withStyles(styles)(MenuAdmin);
// React
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import { Link } from 'react-router-dom';
import Hidden from '@material-ui/core/Hidden';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import Toolbar from '@material-ui/core/Toolbar';
import { ListItem, ListItemText } from 'material-ui/List';

const styles = {
  list: {
    width: 250,
  },

  fullList: {
    width: 'auto',
  },
};
/*
======= ROUTING =========
*/
const MyAccueil = (props) => <Link to="/" {...props} />;
const MyAteliers = (props) => <Link to="/ateliers" {...props} />;
const MyIntervenants = (props) => <Link to="/intervenants" {...props} />;
const MyContact = (props) => <Link to="/contact" {...props} />;
const MyConcept = (props) => <Link to="/concept" {...props} />;
/*
======= ROUTING ========
*/
class TemporaryDrawer extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      top: false,
      left: false,
      bottom: false,
      right: false,
    };
  }

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Toolbar position="sticky">
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography
            variant="title"
            style={{ flex: 1 }}
            color="inherit"
            noWrap
          >
            Atelier du Héron Bleu
          </Typography>
          <Hidden xsDown>
            <Button color="inherit" component={MyAccueil}>
              Accueil
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit" component={MyAteliers}>
              Ateliers
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit" component={MyIntervenants}>
              Intervenants
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit" component={MyConcept}>
              Concept
            </Button>
          </Hidden>
          <Hidden xsDown>
            <Button color="inherit" component={MyContact}>
              Contact
            </Button>
          </Hidden>
        </Toolbar>
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div className={classes.drawerHeader} />
          <Divider />
          <List>
            <ListItem button component={MyAccueil}>
              Accueil
              <ListItemText />
            </ListItem>
            <ListItem button component={MyAteliers}>
              Atelier
              <ListItemText />
            </ListItem>
            <ListItem button component={MyIntervenants}>
              Intervenants
              <ListItemText />
            </ListItem>
            <ListItem button component={MyConcept}>
              Concept
              <ListItemText />
            </ListItem>
            <ListItem button component={MyContact}>
              Contact
              <ListItemText />
            </ListItem>
          </List>
          <Divider />
          <Button color="inherit" component={MyAccueil}>
            Connexion
          </Button>
        </Drawer>
      </div>
    );
  }
}

TemporaryDrawer.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(TemporaryDrawer);

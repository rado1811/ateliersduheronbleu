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

const MyHome = props => <Link to="/" {...props} />;
const Mytest = props => <Link to="/test" {...props} />;
const MyPage2 = props => <Link to="/page2" {...props} />;
const MyContact = props => <Link to="/" {...props} />;

class TemporaryDrawer extends React.Component {
  state = {
    top: false,
    left: false,
    bottom: false,
    right: false,
  };

  toggleDrawer = (side, open) => () => {
    this.setState({
      [side]: open,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <Toolbar>
          <Hidden smUp>
            <IconButton
              color="inherit"
              aria-label="open drawer"
              onClick={this.toggleDrawer('left', true)}
            >
              <MenuIcon />
            </IconButton>
          </Hidden>
          <Typography variant="title" color="inherit" noWrap>
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
        <Drawer
          open={this.state.left}
          onClose={this.toggleDrawer('left', false)}
        >
          <div className={classes.drawerHeader} />
          <Divider />
          <List>
            <ListItem button component={MyHome}>
              Home
              <ListItemText />
            </ListItem>
            <ListItem button component={Mytest}>
              Test
              <ListItemText />
            </ListItem>
            <ListItem button component={MyPage2}>
              Page 2
              <ListItemText />
            </ListItem>
            <ListItem button component={MyPage2}>
              Contact
              <ListItemText />
            </ListItem>
          </List>
          <Divider />
          <Button color="inherit" component={MyHome}>
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

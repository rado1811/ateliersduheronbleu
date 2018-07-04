import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';

const styles = {
  root: {
    width: '300px',
    padding: 0,
  },
  bigAvatar: {
    width: 80,
    height: 80,
  },
};

const intervenantsModal = (props) => {
  const { classes } = props;
  return (
    <div className={classes.root}>
      <Avatar
        alt="DessinEnvol"
        src="../images/envol.jpg"
        className={classes.bigAvatar}
        label="HELLO"
      />
      <h1>{props.citation}</h1>
      <br />
      {props.parcours}
    </div>
  );
};

export default withStyles(styles)(intervenantsModal);

import React, { Component } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Slide from '@material-ui/core/Slide';
import PropTypes from 'prop-types';

function Transition(props) {
  return <Slide direction="right" {...props} />;
}

class AlertDialogSlide extends Component {
  render() {
    return (
      <div>
        <Dialog
          open={this.props.showDialogueBox}
          TransitionComponent={Transition}
          keepMounted
          onClose={this.props.hideDialogueBox}
          aria-labelledby="alert-dialog-slide-title"
          aria-describedby="alert-dialog-slide-description"
        >
          <DialogTitle id="alert-dialog-slide-title">
            {this.props.messageDialogue.length > 1
              ? 'Informations manquantes'
              : 'Information manquante'}
          </DialogTitle>
          <DialogContent>
            {this.props.messageDialogue.map((message, i) => {
              return (
                <DialogContentText key={i} id="alert-dialog-slide-description">
                  {message}
                </DialogContentText>
              );
            })}
          </DialogContent>
          <DialogActions>
            <Button onClick={this.props.hideDialogueBox} color="primary">
              Compris
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    );
  }
}

AlertDialogSlide.propTypes = {
  hideDialogueBox: PropTypes.func.isRequired,
  messageDialogue: PropTypes.arrayOf(PropTypes.string).isRequired,
  showDialogueBox: PropTypes.bool.isRequired,
};
export default AlertDialogSlide;

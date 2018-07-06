import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import './intervenantsModal.css';

class IntervenantsModal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <Modal
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
        open={this.state.open}
        onClose={this.handleClose}
      >
        <div className="modalIntervenants">
          <Avatar
            alt="avatar intervenant"
            src={this.props.photo}
            className="bigAvatar"
            label="HELLO"
          />
          <h1>{this.props.citation}</h1>
          <br />
          {this.props.parcours}
        </div>
      </Modal>
    );
  }
}

IntervenantsModal.propTypes = {
  photo: PropTypes.string.isRequired,
  citation: PropTypes.string.isRequired,
  parcours: PropTypes.string.isRequired,
};

export default IntervenantsModal;

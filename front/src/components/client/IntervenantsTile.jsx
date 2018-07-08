import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import './intervenants.css';

class IntervenantsTile extends Component {
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
      <GridListTile className="tileIntervenants">
        <img src={`/images/${this.props.photo}`} alt={this.props.nom} />
        <GridListTileBar
          title={this.props.prenom + ' ' + this.props.nom}
          subtitle={<span>{this.props.metier}</span>}
          actionIcon={
            <IconButton
              style={{color: 'white'}}
              onClick={() => this.handleOpen()} 
            >
              <InfoIcon />
            </IconButton>
          } 
        />
        <Modal
          aria-labelledby="simple-modal-title"
          aria-describedby="simple-modal-description"
          open={this.state.open}
          onClose={() => this.handleClose()}
          >
          <div className="modalIntervenants">
            <Avatar
              alt="avatar intervenant"
              src={this.props.photo}
              className="bigAvatar"
              label="HELLO"
            />
            <Typography variant="title" id="modal-title">
              {this.props.citation}
            </Typography>
            <Typography variant="subheading" id="simple-modal-description">
              {this.props.parcours}
            </Typography>
          </div>
        </Modal>
      </GridListTile>
    );
  }
}

IntervenantsTile.propTypes = {
  photo: PropTypes.string.isRequired,
  citation: PropTypes.string.isRequired,
  parcours: PropTypes.string.isRequired,
  prenom: PropTypes.string.isRequired,
  nom: PropTypes.string.isRequired,
  metier: PropTypes.string.isRequired,
};

export default IntervenantsTile;

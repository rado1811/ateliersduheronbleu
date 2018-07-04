import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import BoutonContact from '../client/BoutonContact';
import { fetchIntervenants } from '../../actions/intervenants';
import './intervenants.css';

class Intervenants extends Component {
  state = {
    open: false,
  };
  
  componentDidMount() {
    this.props.fetchIntervenants();
  }

  handleOpen = () => {
    this.setState({ open: true });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <BoutonContact />
        <div className="rootIntervenants">
          <GridList cellHeight={300} className="gridListIntervenants">
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div">Présentation des intervenants</ListSubheader>
            </GridListTile>
            {this.props.intervenants.map(intervenant => (
              <GridListTile key={intervenant.id_intervenant}>
                <img src={intervenant.photo} alt={intervenant.nom} />
                <GridListTileBar
                  title={intervenant.prenom + ' ' + intervenant.nom}
                  subtitle={<span>{intervenant.metier}</span>}
                  actionIcon={
                    <IconButton className="iconIntervenants">
                      <InfoIcon
                        onClick={this.handleOpen} 
                        />
                    </IconButton>
              }
                />
                <Modal
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}
                  // onClose={this.handleClose}
                >
                  <div className='ModalIntervenants'>
                  <img src={'../images/envol.jpg'} alt="dessin_envol" width="100px" height="auto"/>
                    <Typography variant="title" id="modal-title">
                    {intervenant.citation}
                    </Typography>
                    <Typography variant="subheading" id="simple-modal-description">
                      {intervenant.parcours}
                    </Typography>
                  </div>
                </Modal>
              </GridListTile>
            ))}
          </GridList>
        </div>
      </div>
    );
  }
}

Intervenants.propTypes = {
  fetchIntervenants: PropTypes.func.isRequired,
  intervenants: PropTypes.arrayOf(Array).isRequired,
};

function mapStateToProps(state) {
  return { intervenants: state.intervenants.intervenants };
}

export default connect(mapStateToProps, { fetchIntervenants })(Intervenants);

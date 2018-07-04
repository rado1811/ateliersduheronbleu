import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import Grid from '@material-ui/core/Grid';
import GridList from '@material-ui/core/GridList';
import GridListTile from '@material-ui/core/GridListTile';
import GridListTileBar from '@material-ui/core/GridListTileBar';
import ListSubheader from '@material-ui/core/ListSubheader';
import IconButton from '@material-ui/core/IconButton';
import InfoIcon from '@material-ui/icons/Info';
import Modal from '@material-ui/core/Modal';
import Avatar from '@material-ui/core/Avatar';
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
    console.log(this.props.intervenants)
    return (
      <div style={{ marginTop: 50 }}>
        <BoutonContact />
        <Grid container spacing={24}>
          <Grid item xs={12} md={4} className="rootIsabelle">
          <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div" style={{ textAlign: 'center'}}>La fondatrice</ListSubheader>
            </GridListTile>
            {this.props.intervenants.slice(0,1).map(intervenant => (
              <GridListTile key={intervenant.id_intervenant}>
                <img src={intervenant.photo} alt={intervenant.nom} />
                <GridListTileBar
                  title={intervenant.prenom + ' ' + intervenant.nom}
                  subtitle={<span>{intervenant.metier}</span>}
                  actionIcon={
                    <IconButton
                      style={{color: 'white'}}
                      onClick={this.handleOpen} 
                      >
                      <InfoIcon />
                    </IconButton>
                  } 
                />
                <Modal 
                  aria-labelledby="simple-modal-title"
                  aria-describedby="simple-modal-description"
                  open={this.state.open}
                  onClose={this.handleClose}
                >
                  <div className="modalIntervenants">
                        <Avatar
                          alt="DessinEnvol"
                          src="../images/envol.jpg"
                          className="bigAvatar"
                          label="HELLO"
                        />
                        <h1>{intervenant.citation}</h1>
                        <br />
                        {intervenant.parcours}
                      </div>
                </ Modal>
              </GridListTile>
            ))}
          </Grid>
          <Grid item xs>
            <div className="rootIntervenants">
              <GridList cellHeight={500} className="gridListIntervenants">
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div" style={{ textAlign: 'center'}}>Les intervenants</ListSubheader>
                </GridListTile>
                {this.props.intervenants.slice(1).map(intervenant => (
                  <GridListTile key={intervenant.id_intervenant}>
                    <img src={intervenant.photo} alt={intervenant.nom} />
                    <GridListTileBar
                      title={intervenant.prenom + ' ' + intervenant.nom}
                      subtitle={<span>{intervenant.metier}</span>}
                      actionIcon={
                        <IconButton
                        style={{color: 'white'}}
                        onClick={this.handleOpen} 
                          >
                          <InfoIcon />
                        </IconButton>
                      } 
                    />
                    <Modal 
                      aria-labelledby="simple-modal-title"
                      aria-describedby="simple-modal-description"
                      open={this.state.open}
                      onClose={this.handleClose}
                    >
                      <div className="modalIntervenants">
                        <Avatar
                          alt="DessinEnvol"
                          src="../images/envol.jpg"
                          className="bigAvatar"
                          label="HELLO"
                        />
                        <h1>{intervenant.citation}</h1>
                        <br />
                        {intervenant.parcours}
                      </div>
                    </ Modal>
                  </GridListTile>
                ))}
              </GridList>
            </div>
          </Grid>
        </Grid>
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

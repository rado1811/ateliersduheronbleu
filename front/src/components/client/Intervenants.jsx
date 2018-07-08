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
import Avatar from '@material-ui/core/Avatar';
import Modal from '@material-ui/core/Modal';
import Typography from '@material-ui/core/Typography';
import BoutonContact from '../client/BoutonContact';
import { fetchIntervenants } from '../../actions/intervenants';
import IntervenantsTile from './IntervenantsTile';
import './intervenants.css';

class Intervenants extends Component {

  constructor(props) {
    super(props);
    this.state = {
      open: false,
    };
    this.props.fetchIntervenants();
  }

  handleOpen() {
    this.setState({ open: true });
  }

  handleClose() {
    this.setState({ open: false });
  }

  render() {
    return (
      <div style={{ marginTop: 60 }}>
        <BoutonContact />
        <Grid container spacing={24}>
          <Grid item xs={12} md={4}>
            <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
              <ListSubheader component="div" style={{ textAlign: 'center'}}>La fondatrice</ListSubheader>
            </GridListTile>
            <GridListTile>
              <img src={this.props.intervenants[0].photo} alt={this.props.intervenants[0].nom} />
              <GridListTileBar
                title={this.props.intervenants[0].prenom + ' ' + this.props.intervenants[0].nom}
                subtitle={<span>{this.props.intervenants[0].metier}</span>}
                actionIcon={
                  <IconButton
                    style={{ color: 'white' }}
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
                <div className="modalIntervenants" >
                  <Avatar
                    alt="avatar intervenant"
                    src={this.props.intervenants[0].photo}
                    className="modalAvatar"
                    label="HELLO"
                  />
                  <Typography variant="title" id="modal-title">
                    {this.props.intervenants[0].citation}
                  </Typography>
                  <Typography variant="subheading" id="simple-modal-description">
                    <br />
                    {this.props.intervenants[0].parcours}
                  </Typography>
                </div>
              </Modal>
            </GridListTile>
          </Grid>
          <Grid item xs={12} md={8}>
            <div className="rootIntervenants">
              <GridList cellHeight={500}>
                <GridListTile key="Subheader" cols={2} style={{ height: 'auto' }}>
                  <ListSubheader component="div" style={{ textAlign: 'center', backgroundColor: 'E9E7DF'}}>Les intervenants</ListSubheader>
                </GridListTile>
                {this.props.intervenants.slice(1).map(intervenant => (
                  <IntervenantsTile
                    key={intervenant.id_intervenant}
                    photo={intervenant.photo}
                    nom={intervenant.nom}
                    prenom={intervenant.prenom}
                    metier={intervenant.metier}
                    citation={intervenant.citation}
                    parcours={intervenant.parcours}
                  />
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

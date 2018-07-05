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
import BoutonContact from '../client/BoutonContact';
import { fetchIntervenants } from '../../actions/intervenants';
import IntervenantsModal from './IntervenantsModal';
import './intervenants.css';

class Intervenants extends Component {

  constructor(props) {
    super(props)
    this.props.fetchIntervenants();
  }

  render() {
    return (
      <div style={{ marginTop: 50 }}>
        <BoutonContact />
        <Grid container spacing={24}>
          <Grid item xs={12} md={4} className="rootIsabelle">
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
                    onClick={this.props.handleOpen} 
                  >
                    <InfoIcon />
                  </IconButton>
                } 
              />
              <IntervenantsModal
                id={this.props.intervenants[0].id_intervenant}
                prenom={this.props.intervenants[0].prenom}
                nom={this.props.intervenants[0].nom}
                photo={this.props.intervenants[0].photo}
                metier={this.props.intervenants[0].metier}
                citation={this.props.intervenants[0].metier}
                parcours={this.props.intervenants[0].parcours}
              />
            </GridListTile>
            
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
                          onClick={this.props.handleOpen}
                        >
                          <InfoIcon />
                        </IconButton>
                      } 
                    />
                    <IntervenantsModal
                      id={intervenant.id_intervenant}
                      prenom={intervenant.prenom}
                      nom={intervenant.nom}
                      photo={intervenant.photo}
                      metier={intervenant.metier}
                      citation={intervenant.metier}
                      parcours={intervenant.parcours}
                    />
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
  handleOpen: PropTypes.func.isRequired,
};

function mapStateToProps(state) {
  return { intervenants: state.intervenants.intervenants };
}

export default connect(mapStateToProps, { fetchIntervenants })(Intervenants);

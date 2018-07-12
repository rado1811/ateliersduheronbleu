import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Icon from '@material-ui/core/Icon';
import IconButton from '@material-ui/core/Button';
import Tooltip from '@material-ui/core/Tooltip';
import { fetchParticipants } from '../../../actions/participants';
// 
class DashboardParticipants extends Component {
  componentDidMount() {
    this.props.fetchParticipants();
  }

  supprimerStatut = (id_participant) => {
    fetch('/api/participant', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id_participant}),
    })
      .then((res) => res)
      .then((res) => this.setState({ flash: 'participant supprimé', open: true }))
      .catch((err) => err);
  };

  validerStatut = (id_participant) => {
    fetch('/api/participant/valider', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id_participant})
    })
      .then((res) => res.send())
      .then(
        (res) => this.setState({ flash: 'Statut modifié', open: true }),
        (err) => this.setState({ flash: 'Statut modifié', open: true })
      )
  };

  annulerStatut = (id_participant) => {
    fetch('/api/participant/annuler', {
      method: 'PUT',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id_participant})
    })
      .then((res) => res.send())
      .then(
        (res) => this.setState({ flash: 'Statut modifié', open: true }),
        (err) => this.setState({ flash: 'Statut modifié', open: true })
      )
  };


  render() {
    return (
      <div>
        <h1 className="text-center" style={{ marginTop: 20 }}>
          Tableau de bord des participants
        </h1>
        <Paper>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Atelier</TableCell>
                <TableCell >Nom</TableCell>
                <TableCell >Prénom</TableCell>
                <TableCell >Email</TableCell>
                <TableCell >Téléphone</TableCell>
                <TableCell >Statut</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.participants.map((participants) => (
                <TableRow key={participants.id_participant}>
                  <TableCell >{participants.nom_atelier}</TableCell>
                  <TableCell >{participants.nom}</TableCell>
                  <TableCell >{participants.prenom}</TableCell>
                  <TableCell >{participants.email}</TableCell>
                  <TableCell >{participants.tel}</TableCell>
                  <TableCell >{participants.statut}</TableCell>
                  <TableCell>
                    <Tooltip title="Valider">
                      <IconButton mini variant="fab"
                      title="Modifier" 
                      aria-label="edit"
                      style={{backgroundColor:'transparent', color : 'green', marginRight: 15}} 
                      onClick={() =>
                        this.validerStatut(participants.id_participant)
                      }>
                        <Icon>done</Icon>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Annuler">
                      <IconButton mini variant="fab" 
                      aria-label="Annuler"
                      style={{backgroundColor:'transparent', color : 'red', marginRight: 15}}
                      onClick={() => {this.annulerStatut(participants.id_participant)}}>
                        <Icon>clear</Icon>
                      </IconButton>
                    </Tooltip>
                    <Tooltip title="Supprimer">
                      <IconButton mini variant="fab" aria-label="edit"
                      style={{backgroundColor:'transparent', color : 'black', marginRight: 15}}
                      onClick={() =>
                        this.supprimerStatut(participants.id_participant)
                      }>
                      <Icon>delete_sweep</Icon>
                    </IconButton>
                    </Tooltip>
                  </TableCell>
                
                
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

//

function mapStateToProps(state) {
  return {
    participants: state.participants.participants,
  };
}

export default connect(
  mapStateToProps,
  { fetchParticipants }
)(DashboardParticipants);

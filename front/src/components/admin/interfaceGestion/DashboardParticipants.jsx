import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchParticipants } from '../../../actions/participants';

class DashboardParticipants extends Component {
  componentDidMount() {
    this.props.fetchParticipants();
  }

  render() {
    return (
      <div>
        <h1 className="text-center" style={{ marginTop: 20 }}>
          Participants
        </h1>
        <Paper>
          <Table
            style={{
              marginTop: 50
            }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Nom</TableCell>
                <TableCell numeric>Prénom</TableCell>
                <TableCell numeric>Atelier</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this.props.participants.map(participants => (
                <TableRow key={participants.id_participant}>
                  <TableCell component="th" scope="row">
                    {participants.nom}
                  </TableCell>
                  <TableCell numeric>{participants.prenom}</TableCell>
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
  return { participants: state.participants.participants };
}

export default connect(
  mapStateToProps,
  { fetchParticipants }
)(DashboardParticipants);

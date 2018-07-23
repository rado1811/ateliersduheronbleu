import React, { Component } from 'react';
import { connect } from 'react-redux';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { fetchAteliers } from '../../../actions/ateliers';
import RowAtelier from './RowAtelier';


class DashboardAteliers extends Component {

  componentDidMount() {
    this.props.fetchAteliers();
  }

  render() {
    return (
      <div>
        <h1 className="text-center" style={{ marginTop: 30 }}>Tableau de bord des ateliers</h1>
        <Paper>
          <Table>
            <TableHead style={{ backgroundColor: '#B2C4CB', color : '#000000'}}>
              <TableRow>
                <TableCell>Nom de l'atelier</TableCell>
                <TableCell numeric>Places prevus</TableCell>
                <TableCell numeric>Personnes inscrites</TableCell>
                <TableCell numeric>Places restantes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this
                .props
                .ateliers
                .map(atelier => (
                  <RowAtelier
                    key={atelier.id_atelier}
                    idAtelier={atelier.id_atelier}
                    nomAtelier={atelier.nom_atelier}
                    nbParticipants={atelier.nb_participants}
                  />
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    ateliers: state.ateliers.ateliers,
    participants: state.participants.participants,
  };
}

export default connect(mapStateToProps, { fetchAteliers })(DashboardAteliers);

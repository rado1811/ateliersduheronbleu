import React, { Component } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

class DashboardAteliers extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ateliers: [],
    };
  }

  componentDidMount() {
    fetch('/api/ateliers')
      .then(res => res.json())
      .then(ateliers => this.setState({ ateliers }));
  }

  render() {
    return (
      <div>
        <h1 className="text-center">Tableau de bord des ateliers</h1>
        <Paper>
          <Table style={{
            marginTop: 50,
          }}
          >
            <TableHead>
              <TableRow>
                <TableCell>Nom de l'atelier</TableCell>
                <TableCell numeric>Places prevus</TableCell>
                <TableCell numeric>Personnes inscrites</TableCell>
                <TableCell numeric>Places restantes</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {this
                .state
                .ateliers
                .map(atelier => (
                  <TableRow key={atelier.id_atelier}>
                    <TableCell component="th" scope="row">
                      {atelier.nom}
                    </TableCell>
                    <TableCell numeric>{atelier.nb_participants}</TableCell>
                    <TableCell numeric>{atelier.nb_participants - atelier.place_disponibles}</TableCell>
                    <TableCell numeric>{atelier.place_disponibles}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </Paper>
      </div>
    );
  }
}

export default DashboardAteliers;

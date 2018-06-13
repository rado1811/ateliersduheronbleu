import React, { Component } from 'react';
import PropTypes from 'prop-types';
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
            ateliers: []
        }
    }

    componentDidMount(){
        fetch("/api/atelier")
        .then(res => res.json())
        .then(ateliers => this.setState({ ateliers }));
    }

    render() {
        return (
            <Paper>
                <Table style={{marginTop:50}} >
                    <TableHead>
                        <TableRow>
                            <TableCell>Nom de l'atelier</TableCell>
                            <TableCell numeric>Places prevus</TableCell>
                            <TableCell numeric>Personnes inscrites</TableCell>
                            <TableCell numeric>Places restantes</TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>

                            {this.state.ateliers.map(atelier => {
                                return (
                                    <TableRow key={atelier.id}>
                                    <TableCell component="th" scope="row">
                                    {atelier.nom}
                                    </TableCell>
                                    </TableRow>

                                );                               
                            })
                            }
                    </TableBody>
                </Table>
            </Paper>
        );
    }
}

DashboardAteliers.propTypes = {
    classes: PropTypes.shape.isRequired,
};

export default DashboardAteliers;
import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const styles = theme => ({
    root: {
        width: '100%',
        marginTop: theme.spacing.unit * 3,
        overflowX: 'auto',
    },
    table: {
        minWidth: 700,
    },
});

let id = 0;
function createData(name, calories, fat, carbs, protein) {
    id += 1;
    return { id, name, calories, fat, carbs, protein };
}

const data = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
];

function DashboardAteliers(props) {
    const { classes } = props;
    

    return (
        <Paper className={classes.root}>
            <Table className={classes.table}>
                <TableHead>
                    <TableRow>
                        <TableCell>Nom de l'atelier</TableCell>
                        <TableCell numeric>Places prevus</TableCell>
                        <TableCell numeric>Personnes inscrites</TableCell>
                        <TableCell numeric>Places restantes</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map(n => {
                        return (
                            <TableRow key={n.id}>
                                <TableCell component="th" scope="row">
                                    {n.name}
                                </TableCell>
                                <TableCell numeric>{n.calories}</TableCell>
                                <TableCell numeric>{n.fat}</TableCell>
                                <TableCell numeric>{n.carbs}</TableCell>                            
                            </TableRow>
                        );
                    })}
                </TableBody>
            </Table>
        </Paper>
    );
}

DashboardAteliers.propTypes = {
    classes: PropTypes.shape.isRequired,
};

export default withStyles(styles)(DashboardAteliers);
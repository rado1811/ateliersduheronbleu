import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { withStyles } from '@material-ui/core/styles';
import { Link } from 'react-router-dom';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import TableSortLabel from '@material-ui/core/TableSortLabel';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Paper from '@material-ui/core/Paper';
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import AddIcon from '@material-ui/icons/Add';
import Button from '@material-ui/core/Button';
import DeleteIcon from '@material-ui/icons/Delete';
import { lighten } from '@material-ui/core/styles/colorManipulator';
import EditIcon from '@material-ui/icons/Edit';
import { fetchIntervenants, goEditIntervenant } from '../../../actions/intervenants';
import Snackbar from '@material-ui/core/Snackbar';
import { bindActionCreators } from 'redux';

const Admin = (props) => <Link to="/admin/intervenant" {...props} />;

const columnData = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: `Nom de l'intervenant`,
  },
];

class EnhancedTableHead extends React.Component {
  render() {
    return (
      <TableHead>
        <TableRow>
          <TableCell padding="checkbox" />
          {columnData.map((column) => {
            return (
              <TableCell
                key={column.id}
                numeric={column.numeric}
                padding={column.disablePadding ? 'none' : 'default'}
              >
                <Tooltip
                  title="Sort"
                  placement={column.numeric ? 'bottom-end' : 'bottom-start'}
                  enterDelay={300}
                >
                  <TableSortLabel>{column.label}</TableSortLabel>
                </Tooltip>
              </TableCell>
            );
          }, this)}
        </TableRow>
      </TableHead>
    );
  }
}

const toolbarStyles = (theme) => ({
  root: {
    paddingRight: theme.spacing.unit,
  },
  highlight:
    theme.palette.type === 'light'
      ? {
          color: theme.palette.secondary.main,
          backgroundColor: lighten(theme.palette.secondary.light, 0.85),
        }
      : {
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.secondary.dark,
        },
  spacer: {
    flex: '1 1 100%',
  },
  actions: {
    color: theme.palette.text.secondary,
  },
  title: {
    flex: '0 0 auto',
  },
});

let EnhancedTableToolbar = (props) => {
  const { classes } = props;

  return (
    <Toolbar>
      <div className={classes.title}>
        <Typography variant="title" id="tableTitle">
          Liste des intervenants
        </Typography>
      </div>
      <div className={classes.spacer} />
      <div className={classes.actions}>
        <Tooltip title="Ajouter">
          <Button
            style={{ backgroundColor: '#B2C4CB', color: 'white'}}
            mini
            variant="fab"
            color="primary"
            aria-label="add"
            className={classes.button}
            component={Admin}
          >
            <AddIcon size="small" />
          </Button>
        </Tooltip>
      </div>
    </Toolbar>
  );
};

EnhancedTableToolbar.propTypes = {
  classes: PropTypes.object.isRequired,
};

EnhancedTableToolbar = withStyles(toolbarStyles)(EnhancedTableToolbar);

const styles = (theme) => ({
  root: {
    width: '100%',
    marginTop: theme.spacing.unit * 3,
  },
  table: {
    minWidth: 450,
  },
  tableWrapper: {
    overflowX: 'auto',
  },
});

class DashIntervenants extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      page: 0,
      rowsPerPage: 10,
    };
  }

  componentDidMount() {
    this.props.fetchIntervenants();
  }

  deleteIntervenants = (id_intervenant) => {
    fetch('/api/intervenants', {
      method: 'DELETE',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ id_intervenant }),
    })
      .then((res) => res)
      .then((res) =>
        this.setState({ flash: 'intervenant supprimé', open: true })
      )
      .catch((err) => err);
  };

  handleChangePage = (event, page) => {
    this.setState({ page });
  };

  handleChangeRowsPerPage = (event) => {
    this.setState({ rowsPerPage: event.target.value });
  };

  render() {
    const { rowsPerPage, page } = this.state;
    const { classes, goEditIntervenant } = this.props;
    const emptyRows =
      rowsPerPage -
      Math.min(
        rowsPerPage,
        this.props.intervenants.length - page * rowsPerPage
      );
    return (
      <Paper
        className={classes.root}
        style={{
          marginTop: 70,
        }}
      >
        <EnhancedTableToolbar />
        <div className={classes.tableWrapper}>
          <Table className={classes.table} aria-labelledby="tableTitle">
            <EnhancedTableHead rowCount={this.props.intervenants.length} />
            <TableBody>
              {this.props.intervenants
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((intervenant, i) => {
                  return (
                    <TableRow hover key={i}> 
                      <TableCell />
                      <TableCell component="th" scope="row" padding="none">
                        {intervenant.nom}
                      </TableCell>
                      <TableCell component="th" scope="row" padding="none">
                        {intervenant.prenom}
                      </TableCell>
                      { intervenant.id_intervenant === 1 ? (
                        <TableCell style={{ color : "red" }}>
                          Administrateur
                        </TableCell>) : (
                        <TableCell>
                          <Tooltip title="Supprimer">
                            <form>
                              <IconButton 
                                aria-label="Delete"
                                type='submit'>
                                <DeleteIcon
                                  onClick={() =>
                                    this.deleteIntervenants(
                                      intervenant.id_intervenant
                                    )
                                  }
                                />
                              </IconButton>
                            </form>
                          </Tooltip>
                        </TableCell>
                        )       
                      }
                      <TableCell>
                        <Tooltip title="Modifier">
                          <IconButton
                            aria-label="Edit"
                            component={Admin}
                            onClick={() => goEditIntervenant(i)}
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </TableCell>
                    </TableRow>
                  );
                })}
              {emptyRows > 0 && (
                <TableRow style={{ height: 49 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
          </Table>
        </div>
        <TablePagination
          component="div"
          count={this.props.intervenants.length}
          rowsPerPage={rowsPerPage}
          page={page}
          backIconButtonProps={{
            'aria-label': 'Previous Page',
          }}
          nextIconButtonProps={{
            'aria-label': 'Next Page',
          }}
          onChangePage={this.handleChangePage}
          onChangeRowsPerPage={this.handleChangeRowsPerPage}
        />
        <Snackbar
          open={this.state.open}
          message={this.state.flash}
          autoHideDuration={4000}
          onClose={this.handleToogle}
        />
      </Paper>
    );
  }
}

DashIntervenants.propTypes = {
  classes: PropTypes.object.isRequired,
  fetchIntervenants: PropTypes.func.isRequired,
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goEditIntervenant,
      fetchIntervenants,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return { intervenants: state.intervenants.intervenants };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    mapDispatchToProps
  )
)(DashIntervenants);

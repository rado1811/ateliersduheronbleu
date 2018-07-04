import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { bindActionCreators } from 'redux';
import ButtonFormulaireIntervenant from './ButtonFormulaireIntervenant';
import { goEditIntervenant } from '../../../actions/intervenants';
class FormulaireIntervenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      tel: '',
      email: '',
      parcours: '',
      metier: '',
      citation: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    alert('intervenant', nextProps);
    if (nextProps.isFromEditIntervenant) {
      this.setState({
        prenom:
          nextProps.intervenants[nextProps.indexIntervenantsFromEdit].prenom,
        tel: nextProps.intervenants[nextProps.indexIntervenantsFromEdit].tel,
        parcours:
          nextProps.intervenants[nextProps.indexIntervenantsFromEdit].parcours,
        email:
          nextProps.intervenants[nextProps.indexIntervenantsFromEdit].email,
        lieu: nextProps.intervenants[nextProps.indexIntervenantsFromEdit].lieu,
        nb_participants:
          nextProps.intervenants[nextProps.indexIntervenantsFromEdit]
            .nb_participants,
        metier:
          nextProps.intervenants[nextProps.indexIntervenantsFromEdit].metier,
        citation:
          nextProps.intervenants[nextProps.indexIntervenantsFromEdit].citation,
      });
    }
  }

  /*   updateNomField = (event) => {
    this.setState({
      prenom: event.target.value,
    });
  }; */

  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = (e) => {
    e.preventDefault();
    fetch('/api/intervenants', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(this.state),
    })
      .then((res) => res.json())
      .then(
        (res) =>
          this.setState({ flash: 'nouvel intervenant enregistré', open: true }),
        (err) => this.setState({ flash: 'Formulaire incomplet', open: true })
      );
  };

  // ========== UPDATE =========
  handleUpdate = (event) => {
    event.preventDefault();
    let data = {
      ...this.state,
    };
    fetch('/api/intervenants', {
      method: 'PUT',
      headers: new Headers({
        Accept: 'application/json',
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify({ data }),
    })
      .then((res) => res.json())
      .then(
        (res) => this.setState({ flash: 'Formulaire modifié', open: true }),
        (err) => this.setState({ flash: 'Formulaire modifié', open: true })
      )
      .then(
        this.setState({
          nom: '',
          prenom: '',
          tel: '',
          email: '',
          parcours: '',
          metier: '',
          citation: '',
        })
      );
  };

  render() {
    const { isFromEditIntervenant } = this.props;
    console.log(isFromEditIntervenant);
    return (
      <Grid>
        <div>
          <h1 className="text-center">Ajouter un intervenant</h1>
          <form
            onSubmit={
              isFromEditIntervenant ? this.handleUpdate : this.handleSubmit
            }
          >
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="nom"
                  label="Nom"
                  type="text"
                  value={this.state.nom}
                  onChange={this.handleChange}
                />
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="prenom"
                  label="Prenom"
                  type="text"
                  value={this.state.prenom}
                  onChange={this.handleChange}
                />
                <br />
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="tel"
                  label="Telephone"
                  value={this.state.tel}
                  onChange={this.handleChange}
                />
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  name="email"
                  label="Email"
                  type="email"
                  value={this.state.email}
                  onChange={this.handleChange}
                />
                <br />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              multiline
              name="parcours"
              type="text"
              label="Parcours"
              value={this.state.parcours}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              fullWidth
              multiline
              required
              name="metier"
              type="text"
              label="Métier"
              value={this.state.metier}
              onChange={this.handleChange}
            />
            <br />
            <TextField
              fullWidth
              multiline
              name="citation"
              type="text"
              label="Citation"
              value={this.state.citation}
              onChange={this.handleChange}
            />
            <br />
            <Grid style={{ textAlign: 'center' }}>
              {isFromEditIntervenant ? (
                <Button
                  type="submit"
                  value="Submit"
                  variant="raised"
                  color="primary"
                >
                  Modifier
                </Button>
              ) : (
                <ButtonFormulaireIntervenant />
              )}
            </Grid>
          </form>
        </div>
        <Snackbar
          open={this.state.open}
          message={this.state.flash}
          autoHideDuration={4000}
          onClose={this.handleToogle}
        />
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goEditIntervenant,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    intervenants: state.intervenants.intervenants,
    indexIntervenantFromEdit: state.editIntervenant.indexIntervenantFromEdit,
    isFromEditIntervenant: state.editIntervenant.isFromEditIntervenant,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormulaireIntervenant);

import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { bindActionCreators } from 'redux';
import ButtonFormulaireIntervenant from './ButtonFormulaireIntervenant';
import {
  goEditIntervenant,
  cleanIntervenant,
} from '../../../actions/intervenants';
import Paper from '@material-ui/core/Paper';

class FormulaireIntervenant extends Component {
  constructor(props) {
    super(props);
    if (this.props.isFromEditIntervenant) {
      this.state = {
        nom: this.props.intervenants[this.props.indexIntervenantFromEdit].nom,
        prenom: this.props.intervenants[this.props.indexIntervenantFromEdit]
          .prenom,
        tel: this.props.intervenants[this.props.indexIntervenantFromEdit].tel,
        email: this.props.intervenants[this.props.indexIntervenantFromEdit]
          .email,
        parcours: this.props.intervenants[this.props.indexIntervenantFromEdit]
          .parcours,
        metier: this.props.intervenants[this.props.indexIntervenantFromEdit]
          .metier,
        citation: this.props.intervenants[this.props.indexIntervenantFromEdit]
          .citation,
        id_intervenant: this.props.intervenants[
          this.props.indexIntervenantFromEdit
        ].id_intervenant,
      };
    } else {
      this.state = {
        nom: '',
        prenom: '',
        tel: '',
        email: '',
        parcours: '',
        metier: '',
        citation: '',
        photo: {},
      };
    }
  }

  componentWillUnmount() {
    this.props.cleanIntervenant();
  }
  handleChange = (e) => {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  };

  handleSubmit = (e) => {
    e.preventDefault();

    let form = {
      ...this.state,
    };

    let data = new FormData();
    data.append('file', this.state.photo);
    data.append('form', JSON.stringify(form));

    axios
      .post('/api/intervenants', data)
      .then((res) =>
        this.setState({ flash: 'Nouvel intervenant crée', open: true })
      );
      setTimeout(() => {
        this.props.history.push('/admin/administration');
      }, 2500);
  };
  updatePhotoField = () => {
    const inputFile = this.refs.photo;
    const files = inputFile.files;
    console.log(files);
    if (files.length > 0) {
      this.setState({
        photo: files[0],
      });
    }
  };

  // ========== UPDATE =========
  handleUpdate = (e) => {
    e.preventDefault();

    let form = {
      ...this.state,
    };

    let data = new FormData();
    data.append('file', this.state.photo);
    data.append('form', JSON.stringify(form));

    axios
      .put('/api/intervenants', data)
      .then((res) =>
        this.setState({ flash: 'Nouvel intervenant crée', open: true })
      )
      .then((res) => res.json())
      .then(
        (res) => this.setState({ flash: 'Intervenant modifié', open: true }),
        (err) => this.setState({ flash: 'Intervenant modifié', open: true })
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
          photo: {},
        })
      );
      setTimeout(() => {
        this.props.history.push('/admin/administration');
      }, 2500);
  };

  render() {
    const { isFromEditIntervenant } = this.props;
    return (
      <Grid
        style={{
          marginTop: 80,
        }}
      >
        <Paper style={{ padding: 20 }} elevation={24}>
          <div>
            {isFromEditIntervenant ? (
              <h1 style={{ textAlign: 'center' }}>Modifier un intervenant</h1>
            ) : (
              <h1 style={{ textAlign: 'center' }}>Ajouter un intervenant</h1>
            )}
            {this.state.id_intervenant === 1 ? (
              <h1 style={{ textAlign: 'center', color: 'red' }}>
                Compte administrateur (ne peut être supprimé)
              </h1>
            ) : null}
            <form
              onSubmit={
                isFromEditIntervenant ? this.handleUpdate : this.handleSubmit
              }
            >
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    style={{ margin: 15 }}
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
                    style={{ margin: 15 }}
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
                  {this.state.id_intervenant === 1 ? (
                    <h5 style={{ color: 'red' }}>
                      Téléphone apparaissant sur le formulaire de contact:{' '}
                    </h5>
                  ) : null}
                  <TextField
                    style={{ margin: 15 }}
                    required
                    name="tel"
                    label="Telephone"
                    value={this.state.tel}
                    onChange={this.handleChange}
                  />
                  <br />
                </Grid>
                <Grid item xs={12} sm={6}>
                  {this.state.id_intervenant === 1 ? (
                    <h5 style={{ color: 'red' }}>
                      Email de réception des formulaires client:{' '}
                    </h5>
                  ) : null}
                  <TextField
                    style={{ margin: 15 }}
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
                style={{ margin: 15 }}
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
                style={{ margin: 15 }}
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
                style={{ margin: 15 }}
                fullWidth
                multiline
                name="citation"
                type="text"
                label="Citation"
                value={this.state.citation}
                onChange={this.handleChange}
              />
              <br />
              <input
                type="file"
                ref="photo"
                required
                name="photo"
                onChange={this.updatePhotoField.bind(this)}
              />
              <br />
              <Grid style={{ textAlign: 'center' }}>
                {isFromEditIntervenant ? (
                  <Button
                    style={{
                      backgroundColor: '#B2C4CB',
                      color: 'white',
                      margin: 15,
                    }}
                    type="submit"
                    value="Submit"
                    variant="raised"
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
        </Paper>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goEditIntervenant,
      cleanIntervenant,
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

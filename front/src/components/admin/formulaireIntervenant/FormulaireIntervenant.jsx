import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import axios from 'axios';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import { connect } from 'react-redux';
import Snackbar from '@material-ui/core/Snackbar';
import { bindActionCreators } from 'redux';
import ButtonFormulaireIntervenant from './ButtonFormulaireIntervenant';
import { goEditIntervenant } from '../../../actions/intervenants';
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

    axios.post('/api/intervenants', data)
    .then(res => this.setState({ flash: 'Formulaire envoyé', open: true }));
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
  handleSubmit = (event) => {
    event.preventDefault();

    let form = {
      ...this.state,
      id_intervenant: this.state.nom_intervenant,
    };

    let data = new FormData();
    data.append('file', this.state.photo);
    data.append('form', JSON.stringify(form));

    axios.post('/api/intervenants', data)
    .then(res => this.setState({ flash: 'Formulaire envoyé', open: true }));
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
              <Grid style={{ textAlign: 'center' }}>
                {isFromEditIntervenant ? (
                  <Button
                    style={{ margin: 15 }}
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
<<<<<<< HEAD
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
            <input type="file"
            ref="photo"
            name="photo"
            onChange={this.updatePhotoField.bind(this)} />
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
=======
            </form>
          </div>
          <Snackbar
            open={this.state.open}
            message={this.state.flash}
            autoHideDuration={4000}
            onClose={this.handleToogle}
          />
        </Paper>
>>>>>>> dev
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

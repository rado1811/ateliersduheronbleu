import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import InputAdornment from '@material-ui/core/InputAdornment';
import Place from '@material-ui/icons/Place';
import Snackbar from '@material-ui/core/Snackbar';
import { goEdit, cleanEdit } from '../../../../../actions/ateliers';
import { bindActionCreators } from 'redux';
class FormAtelier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom_atelier: '',
      debut: '',
      nb_participants: '',
      prix: '',
      contenu: '',
      formule: '',
      lieu: '',
      photo_atelier: {},
      programme: '',
      id_atelier: '',
      id_intervenant: '',
      place_disponibles: '',
      nom_intervenant: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isFromEdit) {
      this.setState({
        debut: nextProps.ateliers[nextProps.indexAtelierFromEdit].debut,
        formule: nextProps.ateliers[nextProps.indexAtelierFromEdit].formule,
        id_atelier: this.props.ateliers[nextProps.indexAtelierFromEdit]
          .id_atelier,
        id_intervenant: this.props.ateliers[nextProps.indexAtelierFromEdit]
          .id_intervenant,
        lieu: nextProps.ateliers[nextProps.indexAtelierFromEdit].lieu,
        nb_participants:
          nextProps.ateliers[nextProps.indexAtelierFromEdit].nb_participants,
        nom_atelier: this.props.ateliers[nextProps.indexAtelierFromEdit]
          .nom_atelier,
        photo_atelier:
          nextProps.ateliers[nextProps.indexAtelierFromEdit].photo_atelier,
        place_disponibles:
          nextProps.ateliers[nextProps.indexAtelierFromEdit].place_disponibles,
        prix: nextProps.ateliers[nextProps.indexAtelierFromEdit].prix,
        contenu: nextProps.ateliers[nextProps.indexAtelierFromEdit].contenu,
        programme: nextProps.ateliers[nextProps.indexAtelierFromEdit].programme,
      });
    }
  }

  componentWillUnmount() {
    this.props.cleanEdit();
  }
  updateNomField = (event) => {
    this.setState({
      nom_atelier: event.target.value,
    });
  };
  updateDebutField = (event) => {
    this.setState({
      debut: event.target.value,
    });
  };
  updateNbField = (event) => {
    this.setState({
      nb_participants: event.target.value,
    });
  };
  updatePrixField = (event) => {
    this.setState({
      prix: event.target.value,
    });
  };
  updateContenuField = (event) => {
    this.setState({
      contenu: event.target.value,
    });
  };
  updateFormuleField = (event) => {
    this.setState({
      formule: event.target.value,
    });
  };
  updateLieuField = (event) => {
    this.setState({
      lieu: event.target.value,
    });
  };
  updatePhotoField = () => {
    const inputFile = this.refs.photo_atelier;
    const files = inputFile.files;
    console.log(files);
    if (files.length > 0) {
      this.setState({
        photo_atelier: files[0],
      });
    }
  };
  updatePlacesField = (event) => {
    this.setState({
      place_disponibles: event.target.value,
    });
  };
  updateProgrammeField = (event) => {
    this.setState({
      programme: event.target.value,
    });
  };
  updateIntervenantField = (event) => {
    this.setState({
      nom_intervenant: event.target.value,
    });
  };
  handleClick = (state) => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = (event) => {
    event.preventDefault();

    let form = {
      ...this.state,
      id_intervenant: this.state.nom_intervenant,
    };

    let data = new FormData();
    data.append('file', this.state.photo_atelier);
    data.append('form', JSON.stringify(form));

    axios
      .post('/api/ateliers', data)
      .then((res) =>
        this.setState({ flash: 'Nouvel atelier crée', open: true })
      );
  };
  // ========== UPDATE =========
  handleUpdate = (event) => {
    event.preventDefault();

    let form = {
      ...this.state,
      id_atelier: this.state.id_atelier,

    };

    let data = new FormData();
    data.append('file', this.state.photo_atelier);
    data.append('form', JSON.stringify(form));

    axios
      .put('/api/ateliers', data)
      .then((res) =>
        this.setState({ flash: 'Atelier modifié', open: true })
      )
      .then(
        (res) => this.setState({ flash: 'Atelier modifié', open: true }),
        (err) => this.setState({ flash: 'Formulaire incomplet', open: true })
      )
      .then(
        this.setState({
          nom_atelier: '',
          debut: '',
          nb_participants: '',
          prix: '',
          contenu: '',
          formule: '',
          lieu: '',
          photo_atelier: {},
          programme: '',
          id_atelier: '',
          id_intervenant: '',
          places_disponibles: '',
        })
      )
      .then(this.props.history.push('/admin/dashboard')
      );
  };

  render() {
    const { isFromEdit } = this.props;
    return (
      <Grid
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          marginTop: 80,
        }}
      >
        <Paper style={{ padding: 20 }} elevation={24}>
          <div>
            <form onSubmit={isFromEdit ? this.handleUpdate : this.handleSubmit}>
              {isFromEdit ? (
                <h1 style={{ textAlign: 'center' }}>
                  Modification d'un atelier
                </h1>
              ) : (
                  <h1 style={{ textAlign: 'center' }}>Ajouter un atelier</h1>
                )}
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    style={{ margin: 15 }}
                    name="nom"
                    required
                    label="Titre de l'Atelier"
                    type="text"
                    value={this.state.nom_atelier}
                    onChange={this.updateNomField}
                  />
                  <br />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <br />
                  <TextField
                    style={{ margin: 15 }}
                    name="debut"
                    required
                    label=""
                    type="date"
                    value={this.state.debut}
                    onChange={this.updateDebutField}
                  />
                  <br />
                </Grid>
              </Grid>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <br />
                  <TextField
                    style={{ margin: 15 }}
                    name="nb_participants"
                    required
                    label="Nombre Participants :"
                    type="number"
                    value={this.state.nb_participants}
                    onChange={this.updateNbField}
                  />
                  <br />
                </Grid>
                <Grid item xs={12} sm={6}>
                  <br />
                  <TextField
                    style={{ margin: 15 }}
                    name="prix"
                    required
                    label="Prix"
                    type="text"
                    value={this.state.prix}
                    onChange={this.updatePrixField}
                  />
                  <br />
                </Grid>
              </Grid>
              <TextField
                style={{ margin: 15 }}
                fullWidth
                multiline
                name="contenu"
                required
                label="Contenu"
                multiligne="true"
                type="text"
                value={this.state.contenu}
                onChange={this.updateContenuField}
              />
              <br />
              <Grid container spacing={24}>
                <br />
                <Grid item xs={12} sm={6}>
                  <TextField
                    style={{ margin: 15 }}
                    name="formule"
                    label="Formule ?"
                    required
                    type="text"
                    value={this.state.formule}
                    onChange={this.updateFormuleField}
                  />
                </Grid>
                <br />
                <Grid item xs={12} sm={6}>
                  <br />
                  <input
                    type="file"
                    ref="photo_atelier"
                    name="photo"
                    onChange={this.updatePhotoField.bind(this)}
                  />
                </Grid>
              </Grid>
              <br />
              <Grid container spacing={24}>
                <br />
                <Grid item xs={12} sm={6}>
                  <TextField
                    style={{ margin: 15 }}
                    name="lieu"
                    label=""
                    type="text"
                    value={this.state.lieu}
                    onChange={this.updateLieuField}
                    InputProps={{
                      startAdornment: (
                        <InputAdornment position="start">
                          <Place />
                        </InputAdornment>
                      ),
                    }}
                  />
                </Grid>
                <br />
                <br />
                <Grid item xs={12} sm={6}>
                <TextField
                style={{ margin: 15 }}
                fullWidth
                multiline
                name="id_intervenant"
                label="Intervenants"
                type="text"
                value={this.state.nom_intervenant}
                onChange={this.updateIntervenantField}
              />
                </Grid>
              </Grid>
              <br />
              <TextField
                style={{ margin: 15 }}
                fullWidth
                multiline
                name="programme"
                label="Programme"
                type="text"
                value={this.state.programme}
                onChange={this.updateProgrammeField}
              />
              <br />
              <br />
              <div>
                {isFromEdit ? (
                  <Button
                    style={{ backgroundColor: '#B2C4CB', color: 'white', margin: 15 }}
                    type="submit"
                    value="Submit"
                    variant="raised"
                    
                  >
                    Modifier
                  </Button>
                ) : (
                    <Button
                      style={{ backgroundColor: '#B2C4CB', color: 'white', margin: 15 }}
                      type="submit"
                      value="Submit"
                      variant="raised"
                      
                    >
                      Enregistrer
                  </Button>
                  )}
              </div>
            </form>
            <Snackbar
              open={this.state.open}
              message={this.state.flash}
              autoHideDuration={4000}
              onClose={this.handleToogle}
            />
          </div>
        </Paper>
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goEdit,
      cleanEdit,
    },
    dispatch
  );
}

function mapStateToProps(state) {
  return {
    intervenants: state.intervenants.intervenants,
    ateliers: state.ateliers.ateliers,
    indexAtelierFromEdit: state.edit.indexAtelierFromEdit,
    isFromEdit: state.edit.isFromEdit,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FormAtelier);

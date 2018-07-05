import React, { Component } from 'react';
import { connect } from 'react-redux';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Place from '@material-ui/icons/Place';
import Snackbar from '@material-ui/core/Snackbar';
import { goEdit } from '../../../../../actions/ateliers';
import { bindActionCreators } from 'redux';
class FormAtelier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      debut: '',
      nb_participants: '',
      prix: '',
      contenu: '',
      formule: '',
      lieu: '',
      photo: '',
      programme: '',
      id_atelier: '',
      id_intervenant: '',
      places_disponibles: '',
      nom_intervenant: '',
    };
  }
  componentWillReceiveProps(nextProps) {
    if (nextProps.isFromEdit) {
      this.setState({
        contenu: nextProps.ateliers[nextProps.indexAtelierFromEdit].contenu,
        debut: nextProps.ateliers[nextProps.indexAtelierFromEdit].debut,
        formule: nextProps.ateliers[nextProps.indexAtelierFromEdit].formule,
        id_atelier: this.props.ateliers[nextProps.indexAtelierFromEdit]
          .id_atelier,
        id_intervenant: this.props.ateliers[nextProps.indexAtelierFromEdit]
          .id_intervenant,
        lieu: nextProps.ateliers[nextProps.indexAtelierFromEdit].lieu,
        nb_participants:
          nextProps.ateliers[nextProps.indexAtelierFromEdit].nb_participants,
        nom: this.props.ateliers[nextProps.indexAtelierFromEdit].nom,
        photo: nextProps.ateliers[nextProps.indexAtelierFromEdit].photo,
        places_disponibles:
          nextProps.ateliers[nextProps.indexAtelierFromEdit].places_disponibles,
        prix: nextProps.ateliers[nextProps.indexAtelierFromEdit].prix,
        programme: nextProps.ateliers[nextProps.indexAtelierFromEdit].programme,
      });
    }
  }

  updateNomField = (event) => {
    this.setState({
      nom: event.target.value,
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
  updatePhotoField = (event) => {
    this.setState({
      photo: event.target.value,
    });
  };
  updatePlacesField = (event) => {
    this.setState({
      places_disponibles: event.target.value,
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
    let data = {
      ...this.state,
      id_intervenant: this.state.nom_intervenant,
    };

    fetch('/api/ateliers', {
      method: 'POST',
      headers: new Headers({
        'Content-Type': 'application/json',
      }),
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then(
        (res) => this.setState({ flash: 'Formulaire envoyé', open: true }),
        (err) => this.setState({ flash: 'Formulaire envoyé', open: true })
      );
  };
  // ========== UPDATE =========
  handleUpdate = (event) => {
    event.preventDefault();
    let data = {
      ...this.state,
    };
    fetch('/api/ateliers', {
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
          debut: '',
          nb_participants: '',
          prix: '',
          contenu: '',
          formule: '',
          lieu: '',
          photo: '',
          programme: '',
          id_atelier: '',
          id_intervenant: '',
          places_disponibles: '',
        })
      );
  };

  render() {
    const { isFromEdit } = this.props;
    return (
      <Grid>
        <div>
          <h1 className="text-center">Ajouter un Atelier</h1>
          <form onSubmit={isFromEdit ? this.handleUpdate : this.handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="nom"
                  required
                  label="Titre de l'Atelier"
                  type="text"
                  value={this.state.nom}
                  onChange={this.updateNomField}
                />
                <br />
              </Grid>
              <Grid item xs={12} sm={6}>
                <br />
                <TextField
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
                <TextField
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
                <TextField
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
            <br />
            <TextField
              name="formule"
              label="Formule ?"
              required
              type="text"
              value={this.state.formule}
              onChange={this.updateFormuleField}
            />
            <br />
            <TextField
              name="photo"
              label="Photo"
              value={this.state.photo}
              onChange={this.updatePhotoField}
            />
            <br />
            <br />
            <TextField
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
            <br />
            <br />
            <InputLabel htmlFor="dropInput">Intervenant</InputLabel>
            <Select
              value={this.state.nom_intervenant}
              onChange={this.updateIntervenantField}
            >
              <MenuItem value="">
                <em>Selectionnez un intervenant</em>
              </MenuItem>
              {this.props.intervenants.map((item) => (
                <MenuItem key={item.id_intervenant} value={item.id_intervenant}>
                  {item.nom} {item.prenom}
                </MenuItem>
              ))}
            </Select>
            <br />
            <TextField
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
                  type="submit"
                  value="Submit"
                  variant="raised"
                  color="primary"
                >
                  Modifier
                </Button>
              ) : (
                <Button
                  type="submit"
                  value="Submit"
                  variant="raised"
                  color="primary"
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
      </Grid>
    );
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      goEdit,
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

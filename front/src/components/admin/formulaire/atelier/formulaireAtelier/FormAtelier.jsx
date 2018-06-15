import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import Select from '@material-ui/core/Select';
import MenuItem from '@material-ui/core/MenuItem';
import InputLabel from '@material-ui/core/InputLabel';
import InputAdornment from '@material-ui/core/InputAdornment';
import Place from '@material-ui/icons/Place';
import Snackbar from '@material-ui/core/Snackbar';

class FormAtelier extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      id_intervenant: [],
      nom_intervenant:'',
      debut: '',
      nb_participants: '',
      prix: '',
      contenu: '',
      formule: '',
      lieu: '',
      photo: '',
      programme: '',
    };
  }
  componentDidMount() {
    fetch('/api/intervenant')
      .then(response => response.json())
      .then(data => {
        this.setState({
          id_intervenant: data,
        });
      })
      .catch(err => console.error(err));
  }

  updateNomField = event => {
    this.setState({
      nom: event.target.value,
    });
  };
  updateDebutField = event => {
    this.setState({
      debut: event.target.value,
    });
  };
  updateNbField = event => {
    this.setState({
      nb_participants: event.target.value,
    });
  };
  updatePrixField = event => {
    this.setState({
      prix: event.target.value,
    });
  };
  updateContenuField = event => {
    this.setState({
      contenu: event.target.value,
    });
  };
  updateFormuleField = event => {
    this.setState({
      formule: event.target.value,
    });
  };
  updateLieuField = event => {
    this.setState({
      lieu: event.target.value,
    });
  };
  updatePhotoField = event => {
    this.setState({
      photo: event.target.value,
    });
  };
  updatePlacesField = event => {
    this.setState({
      places_disponibles: event.target.value,
    });
  };
  updateProgrammeField = event => {
    this.setState({
      programme: event.target.value,
    });
  };
  updateIntervenantField = event => {
    this.setState({
      nom_intervenant: event.target.value,
    });
  };
  handleClick = state => () => {
    this.setState({ open: true, ...state });
  };

  handleClose = () => {
    this.setState({ open: false });
  };

  handleSubmit = event => {
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
      .then(res => res.json())
      .then(
        res => this.setState({ flash: res.flash }),
        err => this.setState({ flash: err.flash })
      );
  };
  render() {
    const { vertical, horizontal, open } = this.state;
    return (
      <Grid>
        <div>
          <h1 className="text-center">Ajouter un Atelier</h1>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={24}>
              <Grid item sm={12} md={6}>
                <TextField
                  name="nom"
                  required
                  label="Titre de l'Atelier"
                  type="text"
                  value={this.state.nom}
                  onChange={this.updateNomField.bind(this)}
                />
                <br />
              </Grid>
              <Grid item sm={12} md={6}>
                <br />
                <TextField
                  name="debut"
                  required
                  label=""
                  type="date"
                  value={this.state.debut}
                  onChange={this.updateDebutField.bind(this)}
                />
                <br />
              </Grid>
            </Grid>
            <Grid container spacing={24}>
              <Grid item sm={12} md={6}>
                <TextField
                  name="nb_participants"
                  required
                  label="Nombre Participants :"
                  type="number"
                  value={this.state.nb_participants}
                  onChange={this.updateNbField.bind(this)}
                />
                <br />
              </Grid>
              <Grid item sm={12} md={6}>
                <TextField
                  name="prix"
                  required
                  label="Prix"
                  type="text"
                  value={this.state.prix}
                  onChange={this.updatePrixField.bind(this)}
                />
                <br />
              </Grid>
            </Grid>
            <TextField
              fullWidth
              name="contenu"
              required
              label="Contenu"
              multiligne
              type="text"
              value={this.state.contenu}
              onChange={this.updateContenuField.bind(this)}
            />
            <br />
            <br />
            <TextField
              name="formule"
              label="Formule ?"
              required
              type="text"
              value={this.state.formule}
              onChange={this.updateFormuleField.bind(this)}
            />
            <br />
            <TextField
              name="photo"
              label="Photo"
              value={this.state.photo}
              onChange={this.updatePhotoField.bind(this)}
            />
            <br />
            <br />
            <TextField
              name="lieu"
              label=""
              type="text"
              value={this.state.lieu}
              onChange={this.updateLieuField.bind(this)}
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
              onChange={this.updateIntervenantField.bind(this)}
            >
              <MenuItem value="">
                <em>Intervenant</em>
              </MenuItem>
              {this.state.id_intervenant.map(item => (
                <MenuItem key={item.id_intervenant} value={item.id_intervenant}>
                  {item.nom} {item.prenom}
                </MenuItem>
              ))}
            </Select>
            <br />
            <TextField
              name="programme"
              label="Programme"
              type="text"
              value={this.state.programme}
              onChange={this.updateProgrammeField.bind(this)}
            />
            <br />
            <br />
            <div>
              <Button
                type="submit"
                value="Submit"
                variant="raised"
                color="primary"
              >
                Enregistrer
              </Button>
            </div>
          </form>
          <Snackbar
            anchorOrigin={{ vertical, horizontal }}
            open={open}
            onClose={this.handleClose}
            ContentProps={{
              'aria-describedby': 'message-id',
            }}
            message={<span id="message-id">{this.state.flash}</span>}
          />
        </div>
      </Grid>
    );
  }
}
// FormAtelier.propTypes = {
//   classes: PropTypes.object.isRequired,
// };

export default FormAtelier;

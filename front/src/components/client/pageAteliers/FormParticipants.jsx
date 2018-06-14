import React, { Component } from 'react';
import { TextField, Button, Snackbar } from 'material-ui';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import AlertDialogSlide from './AlertDialogSlide';

class FormParticipants extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nom: '',
      prenom: '',
      tel: '',
      flash: '',
      open: false,
      alert: false,
      messageDialogue: [],
      input: '',
      atelier1: false,
      atelier2: false,
    };
  }

  formSend = () => {
    let whatIsMissing = [];
    if (this.state.email === '') {
      whatIsMissing.push('Adresse mail requise');
    }

    if (this.state.nom === '') {
      whatIsMissing.push('Nom de famille est requis');
    }
    if (this.state.prenom === '') {
      whatIsMissing.push('Prénom est requis');
    }
    if (this.state.tel === '') {
      whatIsMissing.push('Numéro de téléphone est requis');
    }
    if (whatIsMissing.length > 0) {
      this.showDialogueBox(whatIsMissing);
      return false;
    } else {
      return true;
    }
  };

  showDialogueBox = whatIsMissing => {
    this.setState({
      messageDialogue: whatIsMissing,
      alert: true,
    });
  };

  hideDialogueBox = () => {
    this.setState({
      alert: false,
      messageDialogue: [],
    });
  };

  handleToogle = () => {
    this.setState({ open: !this.state.open });
  };

  handleChange = name => event => {
    this.setState({ [name]: event.target.checked });
  };

  handleSubmit = event => {
    event.preventDefault();
    if (this.formSend()) {
      fetch('/api/participant', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(this.state),
      })
        .then(res => res.json())
        .then(
          res =>
            this.setState({
              flash: res.flash,
              open: true,
            }),
          err =>
            this.setState({
              flash: err.flash,
            })
        );
      this.setState({ flash: 'Formulaire envoyé', open: true });
    } else {
      this.setState({ flash: 'Formulaire incomplet', open: true });
    }
  };

  updateEmailField = event => {
    this.setState({
      email: event.target.value,
    });
  };

  updateFirstNameField = event => {
    this.setState({
      prenom: event.target.value,
    });
  };
  updateLastNameField = event => {
    this.setState({
      nom: event.target.value,
    });
  };
  updatePhoneField = event => {
    this.setState({
      tel: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ margin: 40 }}>
          <Paper elevation={4} style={{ padding: 40 }}>
            <h2>Nouveau participant</h2>
            <div>
              <TextField
                id="email"
                type="email"
                className="form-control"
                label="Email"
                name="email"
                placeholder="victor.leroy@gmail.com"
                onChange={this.updateEmailField}
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                type="text"
                className="form-control"
                label="Prénom"
                name="prenom"
                placeholder="Victor"
                onChange={this.updateFirstNameField}
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                type="text"
                className="form-control"
                label="Nom"
                name="nom"
                placeholder="Leroy"
                onChange={this.updateLastNameField}
                fullWidth
                margin="normal"
              />
            </div>
            <div>
              <TextField
                type="text"
                className="form-control"
                label="Téléphone"
                name="tel"
                placeholder="06695026.."
                onChange={this.updatePhoneField}
                fullWidth
                margin="normal"
              />
            </div>
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.atelier1}
                  onChange={this.handleChange('atelier1')}
                  value="Atelier 1"
                />
              }
              label="Atelier 1"
            />
            <FormControlLabel
              control={
                <Checkbox
                  checked={this.state.atelier2}
                  onChange={this.handleChange('atelier2')}
                  value="Atelier 1"
                />
              }
              label="Atelier 2"
            />
            <div>
              <Button
                onClick={this.handleSubmit}
                type="submit"
                value="Submit"
                variant="raised"
                color="secondary"
              >
                Envoyer
              </Button>
            </div>
          </Paper>
        </form>
        <Snackbar
          open={this.state.open}
          message={this.state.flash}
          autoHideDuration={4000}
          onClose={this.handleToogle}
        />
        <AlertDialogSlide
          showDialogueBox={this.state.alert}
          hideDialogueBox={this.hideDialogueBox}
          messageDialogue={this.state.messageDialogue}
        />
      </div>
    );
  }
}

export default FormParticipants;

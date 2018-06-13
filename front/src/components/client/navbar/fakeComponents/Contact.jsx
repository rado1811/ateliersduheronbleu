import React, { Component } from 'react';
import { TextField, Button, Snackbar } from 'material-ui';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import AlertDialogSlide from '../../pageAteliers/AlertDialogSlide';

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      nom: '',
      prenom: '',
      tel: '',
      message: '',
      flash: '',
      open: false,
      alert: false,
      messageDialogue: [],
      input: '',
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
    if (this.state.message === '') {
      whatIsMissing.push('Un message est requis');
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
      fetch('/mail', {
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
  updateMessageField = event => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit} style={{ margin: 40 }}>
          <Paper elevation={4} style={{ padding: 40 }}>
            <h2 style={{ textAlign: 'center' }}>Une question ?</h2>
            <Grid container spacing={24} align="center">
              <Grid item xs={12} sm={6} style={{ width: '80' }}>
                <div>
                  <TextField
                    id="email"
                    type="email"
                    className="form-control"
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
                    name="tel"
                    placeholder="06695026.."
                    onChange={this.updatePhoneField}
                    fullWidth
                    margin="normal"
                  />
                </div>
                <TextField
                  id="multiline-static"
                  name="message"
                  label="Entre votre texte"
                  multiline
                  fullWidth
                  rows="4"
                  placeholder="Je souhaiterais savoir..."
                  margin="normal"
                  onChange={this.updateMessageField}
                />

                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                  }}
                >
                  <Button
                    onClick={this.handleSubmit}
                    type="submit"
                    value="Submit"
                    variant="raised"
                    color="secondary"
                    style={{ margin: 'auto' }}
                  >
                    Envoyer
                  </Button>
                </div>
              </Grid>
              <Grid
                item
                xs={12}
                sm={6}
                container
                alignItems="center"
                style={{ height: '100%' }}
              >
                <Grid container alignContent="center">
                  <Grid style={{ textAlign: 'center' }} align="center">
                    <img
                      src="https://images.unsplash.com/photo-1520534827997-83397f6aac19?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=48b0b26b5f8b4acfed3b9d11e3181d92&auto=format&fit=crop&w=500&q=60"
                      alt="groupe"
                    />
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
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

export default Contact;

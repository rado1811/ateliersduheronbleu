import React, { Component } from 'react';
import { connect } from 'react-redux';
import compose from 'recompose/compose';
import { fetchIntervenants } from '../../actions/intervenants';
import { TextField, Button, Snackbar } from 'material-ui';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import Footer from '../client/footer/Footer';
import TemporaryDrawer from '../client/navbar/TemporaryDrawer';
import AlertDialogSlide from './pageAteliers/AlertDialogSlide';

const styles = (theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
  },
  spaceFields: {
    justifyContent: 'space-between',
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 250,
  },
  textArea: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
  },
  menu: {
    width: 200,
  },
  submit: {
    width: '100%',
    marginTop: 20,
  },
});

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

  componentDidMount() {
    this.props.fetchIntervenants();
  }

  formSend = () => {
    let whatIsMissing = [];
    if (this.state.email === '') {
      whatIsMissing.push('Adresse mail');
    }
    if (this.state.nom === '') {
      whatIsMissing.push('Nom de famille');
    }
    if (this.state.prenom === '') {
      whatIsMissing.push('Prénom');
    }
    if (this.state.tel === '') {
      whatIsMissing.push('Numéro de téléphone');
    }
    if (this.state.message === '') {
      whatIsMissing.push('Votre message');
    }
    if (whatIsMissing.length > 0) {
      this.showDialogueBox(whatIsMissing);
      return false;
    } else {
      return true;
    }
  };

  showDialogueBox = (whatIsMissing) => {
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

  handleChange = (name) => (event) => {
    this.setState({ [name]: event.target.checked });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.formSend()) {
      fetch('/mail/admin', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then(
          (res) =>
            this.setState({
              flash: res.flash,
              open: true,
            }),
          (err) =>
            this.setState({
              flash: err.flash,
            })
        );
      this.setState({ flash: 'Message envoyé', open: true });
    } else {
      this.setState({ flash: 'Formulaire incomplet', open: true });
    }
  };

  updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updateFirstNameField = (event) => {
    this.setState({
      prenom: event.target.value,
    });
  };
  updateLastNameField = (event) => {
    this.setState({
      nom: event.target.value,
    });
  };
  updatePhoneField = (event) => {
    this.setState({
      tel: event.target.value,
    });
  };
  updateMessageField = (event) => {
    this.setState({
      message: event.target.value,
    });
  };

  render() {
    const { classes } = this.props;
    return (
      <div>
        <TemporaryDrawer />
        <Paper
          elevation={4}
          style={{
            padding: 40,
            marginTop: 80,
            marginLeft: 40,
            marginRight: 40,
          }}
        >
          <h2 style={{ textAlign: 'center' }}>Une question ?</h2>
          <Grid container spacing={24} alignItems="center" align="center">
            <Grid item xs={12} sm={6} style={{ height: '100%' }}>
              <form
                className={classes.container}
                onSubmit={this.handleSubmit}
                style={{ margin: 'auto', marginTop: 10 }}
              >
                <Grid container className={classes.spaceFields}>
                  <TextField
                    className={classes.textArea}
                    id="multiline-static"
                    name="message"
                    label="Entrez votre texte"
                    multiline
                    fullWidth
                    rows="4"
                    placeholder="Je souhaiterais savoir..."
                    margin="normal"
                    onChange={this.updateMessageField}
                  />
                </Grid>
                <Grid container className={classes.spaceFields}>
                    <TextField
                      type="text"
                      className={classes.textField}
                      label="Prénom"
                      name="prenom"
                      placeholder="Victor"
                      onChange={this.updateFirstNameField}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      type="text"
                      className={classes.textField}
                      label="Nom"
                      name="nom"
                      placeholder="Leroys"
                      onChange={this.updateLastNameField}
                      fullWidth
                      margin="normal"
                    />
                </Grid>
                <Grid container className={classes.spaceFields}>
                    <TextField
                      type="text"
                      className={classes.textField}
                      label="Téléphone"
                      name="tel"
                      placeholder="06695026.."
                      onChange={this.updatePhoneField}
                      fullWidth
                      margin="normal"
                    />
                    <TextField
                      id="email"
                      type="email"
                      className={classes.textField}
                      label="Email"
                      name="email"
                      placeholder="addresse@gmail.com"
                      onChange={this.updateEmailField}
                      fullWidth
                      margin="normal"
                    />
                </Grid>
                <div className={classes.submit}>
                  <Button
                    onClick={this.handleSubmit}
                    type="submit"
                    value="Submit"
                    style={{
                      textAlign: 'center',
                      backgroundColor: '#B2C4CB',
                      color: 'white',
                    }}
                    variant="raised"
                  >
                    Envoyer
                  </Button>
                </div>
              </form>
              <div style={{ marginTop: '20px' }}>
                <Typography variant="title" style={{ margin: 'auto' }}>
                  Vous pouvez également nous contacter par téléphone au <br />
                  {this.props.intervenants[0].tel}
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} sm={6}>
              <img
                style={{
                  height: 'auto',
                  width: '100%',
                  backgroundSize: 'contain',
                }}
                src={`/images/envol.jpg`}
                alt="heron"
              />
            </Grid>
          </Grid>
        </Paper>
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
        <Footer />
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { intervenants: state.intervenants.intervenants };
}

export default compose(
  withStyles(styles),
  connect(
    mapStateToProps,
    { fetchIntervenants }
  )
)(Contact);

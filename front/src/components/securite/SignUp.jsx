import React, { Component } from 'react';
import Paper from '@material-ui/core/Paper';
import { TextField, Button, Snackbar } from 'material-ui';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';
import AlertDialogSlide from '../../components/client/pageAteliers/AlertDialogSlide';
import { connect } from 'react-redux';

let hint = '';
const faible = /[a-z]{1,5}/g;
const medium = /^(?=.*[a-z])(?=.*[A-Z])[a-zA-Z]{5,}$/g;
const lastLevel = /(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[#?!@$%^&*-.]).{6,}/g;

const styles = (theme) => ({
  root: {
    flexGrow: 1,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
});
class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      checkPassWord: '',
      prenom: '',
      nom: '',
      flash: '',
      open: false,
      alert: false,
      messageDialogue: [],
      input: '',
      infosUser: false,
      redirect: false,
    };
  }
  formSend = () => {
    let whatIsMissing = [];
    if (this.state.email === '') {
      whatIsMissing.push('Adresse mail requise');
    }
    if (this.state.password === '') {
      whatIsMissing.push('Mot de passe requis');
    }
    if (this.state.password !== this.state.checkPassWord) {
      whatIsMissing.push('Veuillez rentrer le même mot de passe');
    }
    if (this.state.name === '') {
      whatIsMissing.push('Nomm requis');
    }
    if (this.state.lastname === '') {
      whatIsMissing.push('Prénom requis');
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

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.formSend()) {
      fetch('/auth/signup', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then(
          (res) => {
            console.log(res);
            this.setState({
              flash: res.flash,
              open: true,
              redirect: true,
              token: res.token,
            });
            this.props.dispatch({
              type: 'CREATE_SESSION',
              user: res.user,
              token: res.token,
              message: res.message,
            });
          },
          (err) => {
            this.setState({
              flash: err.flash,
            });
          }
        );
    } else {
      this.setState({ flash: 'Formulaire conforme', open: true });
    }
  };

  componentDidUpdate() {
    if (this.state.redirect) {
      this.props.history.push('/zfesg4685f4dqsfv46es8qz4df');
    }
  }
  // qkmlsdjfQLSDFL@@123z

  updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updatePassWordField = (event) => {
    this.setState({
      password: event.target.value,
      input: event.target.value,
    });
    if (this.state.input.match(faible) < 2) {
      hint = 'Mot de passe trop court';
    } else if (this.state.input.match(medium)) {
      hint = 'Mot de passe moyennement fort';
    } else if (this.state.input.match(lastLevel)) {
      hint = `Mot de passe fort`;
    } else {
      hint =
        'Votre mot de passe doit contenir : 7 caractères, 1 majuscule et 2 CARACTERES SPECIAUX';
    }
  };

  updateCheckPassWordField = (event) => {
    this.setState({
      checkPassWord: event.target.value,
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

  /*
======== RENDER ==========
*/
  render() {
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <Grid container spacing={24}>
          <Grid
            item
            xs={12}
            textAlign="center"
            style={{ maxWidth: 600, marginLeft: 'auto', marginRight: 'auto' }}
          >
            <Paper
              style={{
                marginTop: 70,
              }}
            >
              <form onSubmit={this.handleSubmit} style={{ margin: 40 }}>
                <h1>Nouvel utilisateur</h1>
                <div>
                  <TextField
                    id="name"
                    label="Adresse mail"
                    type="email"
                    helperText="Veuilliez inscrire votre adresse mail ici"
                    className="form-control"
                    name="email"
                    placeholder="Votre adresse mail"
                    onChange={this.updateEmailField}
                    fullWidth
                    margin="normal"
                  />
                </div>
                <div>
                  {/* Mot de passe */}
                  <TextField
                    type="password"
                    label="Nouveau mot de passe"
                    className="form-control"
                    aria-describedby="emailHelp"
                    onChange={this.updatePassWordField}
                    fullWidth
                    helperText={hint}
                    margin="normal"
                  />
                </div>
                <div>
                  {/* Vérification du mot de passe */}
                  <TextField
                    type="password"
                    label="Vérification du mot de passe"
                    className="form-control"
                    aria-describedby="emailHelp"
                    placeholder="Entrez le même mot de passe"
                    onChange={this.updateCheckPassWordField}
                    fullWidth
                    helperText={
                      this.state.password === this.state.checkPassWord &&
                      this.state.checkPassWord.length > 0
                        ? 'Mots de passes concordants'
                        : 'Veuillez rentrer le même mot de passe'
                    }
                    margin="normal"
                  />
                </div>
                <div>
                  {/* Prénom */}
                  <TextField
                    type="text"
                    label="Prénom"
                    className="form-control"
                    name="prenom"
                    placeholder="Votre Prénom"
                    onChange={this.updateFirstNameField}
                    fullWidth
                    margin="normal"
                  />
                </div>
                <div>
                  {/* Nom */}
                  <TextField
                    type="text"
                    label="Nom"
                    className="form-control"
                    name="nom"
                    placeholder="Votre Nom"
                    onChange={this.updateLastNameField}
                    fullWidth
                    margin="normal"
                  />
                </div>
                <div>
                  <Button
                    onClick={this.handleSubmit}
                    type="submit"
                    value="Submit"
                    variant="raised"
                    color="secondary"
                    style={{ margin: 30 }}
                  >
                    Valider
                  </Button>
                </div>
              </form>
              <Snackbar
                open={this.state.open}
                message={this.state.flash}
                autoHideDuration={5000}
                onClose={this.handleToogle}
              />
              <AlertDialogSlide
                showDialogueBox={this.state.alert}
                hideDialogueBox={this.hideDialogueBox}
                messageDialogue={this.state.messageDialogue}
              />
            </Paper>
          </Grid>
        </Grid>
      </div>
    );
  }
}

export default connect(
)(withStyles(styles)(SignUp));

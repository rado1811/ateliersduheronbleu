import React, { Component } from 'react';
import { connect } from 'react-redux';
import { TextField, Button, Snackbar } from 'material-ui';
import AlertDialogSlide from '../../components/client/pageAteliers/AlertDialogSlide';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      flash: '',
      open: false,
      alert: false,
      messageDialogue: [],
      infosUser: false,
    };
  }
  /*
======== FONCTIONS =======
*/

  formSend = () => {
    let whatIsMissing = [];
    if (this.state.email === '') {
      whatIsMissing.push('Adresse mail requise');
    }
    if (this.state.password === '') {
      whatIsMissing.push('Mot de passe requis');
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

  updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    });
  };

  updatePassWordField = (event) => {
    this.setState({
      password: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    if (this.formSend()) {
      fetch('/auth/signin', {
        method: 'POST',
        headers: new Headers({
          'Content-Type': 'application/json',
        }),
        body: JSON.stringify(this.state),
      })
        .then((res) => res.json())
        .then(
          ((res) => (
            alert('ok'),
            this.setState({
              flash: res.flash,
              open: true,
              infosUser: true,
              //    infosUser: res.user,
            }),
            this.props.dispatch({
              type: 'CREATE_SESSION',
              user: res.user,
              token: res.token,
              message: res.message,
            })
          ),
          (err) =>
            this.setState({
              flash: err.flash,
            }))
        );
    } else {
      this.setState({ flash: 'Formulaire non conforme', open: true });
    }
  };

  componentDidUpdate() {
    if (this.state.infosUser) {
      this.props.history.push('/admin/dashboard');
    }
  }

  updateEmailField = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  /*
======== RENDER ==========
*/
  render() {
    const { flash } = this.props;
    console.log(flash);
    return (
      <div>
        <h2>Sign In !</h2>
        <form
          action="/login"
          method="post"
          onSubmit={this.handleSubmit}
          style={{ margin: 40 }}
        >
          <div>
            <TextField
              id="name"
              type="email"
              className="form-control"
              name="email"
              placeholder="Email"
              onChange={this.updateEmailField}
              fullWidth
              margin="normal"
            />
          </div>
          <div>
            {/* Mot de passe */}
            <TextField
              type="password"
              name="password"
              className="form-control"
              aria-describedby="emailHelp"
              placeholder="New password"
              onChange={this.updatePassWordField}
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
              style={{ marginTop: 30 }}
            >
              Hit me
            </Button>
          </div>
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

function mapStateToProps(state) {
  return {
    flash: state.auth.token,
  };
}
export default connect(mapStateToProps)(SignIn);

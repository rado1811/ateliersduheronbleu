import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Snackbar from '@material-ui/core/Snackbar';
import ButtonFormulaireIntervenant from './ButtonFormulaireIntervenant';

class FormulaireIntervenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      tel: '',
      email: '',
      parcours: '',
      metier: '',
      citation: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    const change = {};
    change[e.target.name] = e.target.value;
    this.setState(change);
  }
  handleSubmit(e) {
    e.preventDefault();
    fetch('/api/intervenants', {
      method: 'POST',
      headers: new Headers({ 'Content-Type': 'application/json' }),
      body: JSON.stringify(this.state),
    })
      .then(res => res.json())
      .then(
        res => this.setState({ flash: 'nouvel intervenant enregistré', open: true }),
        err => this.setState({ flash: 'Formulaire incomplet', open: true })
      );
  }

  render() {
    return (
      <Grid>
        <div>
          <h1 className="text-center">Ajouter un intervenant</h1>
          <form onSubmit={this.handleSubmit}>
            <Grid container spacing={24}>
              <Grid item xs={12} sm={6}>
                <TextField
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
            <Grid style={{ textAlign: 'center' }}>
              <ButtonFormulaireIntervenant />
            </Grid>
          </form>
        </div>
        <Snackbar
          open={this.state.open}
          message={this.state.flash}
          autoHideDuration={4000}
          onClose={this.handleToogle}
        />
      </Grid>
    );
  }
}

export default FormulaireIntervenant;

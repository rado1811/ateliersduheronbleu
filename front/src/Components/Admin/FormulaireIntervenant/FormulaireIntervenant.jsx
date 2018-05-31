import React, { Component } from 'react';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';

// Composants
import BouttonPhoto from '../BouttonPhoto/BouttonPhoto';
import ButtonFormulaireIntervenant from './ButtonFormulaireIntervenant';


class FormulaireIntervenant extends Component {
  constructor(props) {
    super(props);
    this.state = {
      nom: '',
      prenom: '',
      email: '',
      telephone: '',
      parcours: '',
      metier: '',
      photo: '',
      flash: '',
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
    // console.log(this.state);
    e.preventDefault();
    fetch(
      'admin/administration',
      {
        method: 'POST',
        headers: new Headers({ 'Content-Type': 'application/json' }),
        body: JSON.stringify(this.state),
      },
    )
      .then(res => res.json())
      .then(res => this.setState({ flash: res.flash }), err => this.setState({ flash: err.flash }));
  }

  render() {
    return (
      <Grid item xs={18} sm={9}>
        <div>
          {/* <h1>{JSON.stringify(this.state,1,1)}</h1> */}
          <h1 className="text-center">Ajouter un intervenant</h1>
          <form onSubmit={this.handleSubmit}>
            <TextField
              name="nom"
              label="Nom"
              type="text"
              value={this.state.nom}
              onChange={this.handleChange}
            /><br />
            <TextField
              name="prenom"
              label="Prenom"
              type="text"
              value={this.state.prenom}
              onChange={this.handleChange}
            /><br />
            <TextField
              type="text"
              name="email"
              label="E-mail"
              value={this.state.email}
              onChange={this.handleChange}
            /><br />
            <TextField
              type="text"
              name="telephone"
              label="Télephone"
              value={this.state.telephone}
              onChange={this.handleChange}
            /><br />
            <TextField
              fullWidth
              name="parcours"
              type="text"
              label="Parcours"
              value={this.state.parcours}
              onChange={this.handleChange}
            /><br />
            <TextField
              name="metier"
              type="text"
              label="Métier"
              value={this.state.metier}
              onChange={this.handleChange}
            /><br />
            <BouttonPhoto />
            <ButtonFormulaireIntervenant />
          </form>
        </div>
      </Grid>
    );
  }
}

export default FormulaireIntervenant;
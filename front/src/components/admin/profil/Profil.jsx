
import React, { Component } from 'react';
import { fetchIntervenants, goEditIntervenant } from '../../../actions/intervenants';
import { connect } from 'react-redux';


class ProfilAdmin extends Component {
  state = {}
  render() { 
    return (
      <Grid
        style={{
          marginTop: 80,
        }}
      >
        <Paper style={{ padding: 20 }} elevation={24}>
          <div>
            <h1 style={{ textAlign: 'center' }}>Profil de l'Adminstratrice / Fondatrice</h1>
            <form>
              <Grid container spacing={24}>
                <Grid item xs={12} sm={6}>
                  <TextField
                    style={{ margin: 15 }}
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
                    style={{ margin: 15 }}
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
                    style={{ margin: 15 }}
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
                    style={{ margin: 15 }}
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
                style={{ margin: 15 }}
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
                style={{ margin: 15 }}
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
                style={{ margin: 15 }}
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
                {isFromEditIntervenant ? (
                  <Button
                    style={{ margin: 15 }}
                    type="submit"
                    value="Submit"
                    variant="raised"
                    color="primary"
                  >
                    Modifier
                  </Button>
                ) : (
                  <ButtonFormulaireIntervenant />
                )}
              </Grid>
            </form>
          </div>
          <Snackbar
            open={this.state.open}
            message={this.state.flash}
            autoHideDuration={4000}
            onClose={this.handleToogle}
          />
        </Paper>
      </Grid>


      )
  }
}

function mapStateToProps(state) {
  return {
    intervenants: state.intervenants.intervenants,
    indexIntervenantFromEdit: state.editIntervenant.indexIntervenantFromEdit,
    isFromEditIntervenant: state.editIntervenant.isFromEditIntervenant,
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ProfilAdmin);
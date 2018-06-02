import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from 'material-ui/Grid';
import Paper from '@material-ui/core/Paper';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, reset, submitting } = props;

  updateName = (event) => {
    this.setState({
      checkPassWord: event.target.value,
    });
  };

  updatePrenom = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  updateAdresse = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };
  updateTelephone = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  updateEmailField = (event) => {
    this.setState({
      lastname: event.target.value,
    });
  };

  return (
    <Grid
      container
      style={{
        height: '100%',
      }}
    >
      <Grid item md={12} style={{ padding: 15 }} spacing={24}>
        <Paper>
          <form onSubmit={handleSubmit}>
            <div>
              <label>Nom</label>
              <div>
                <Field
                  name="nom"
                  component="input"
                  type="text"
                  placeholder="Nom"
                  onChange={this.updateName}
                />
              </div>
            </div>
            <div>
              <label>Prénom</label>
              <div>
                <Field
                  name="prénom"
                  component="input"
                  type="text"
                  placeholder="Prénom"
                  onChange={this.updatePrenom}
                />
              </div>
            </div>
            <div>
              <label>Adresse</label>
              <div>
                <Field
                  name="adresse"
                  component="input"
                  type="text"
                  placeholder="Adresse"
                  onChange={this.updateAdresse}
                />
              </div>
            </div>
            <div>
              <label>Numéro de Téléphone</label>
              <div>
                <Field
                  name="telephone"
                  component="input"
                  type="text"
                  placeholder="telephone"
                  onChange={this.updateTelephone}
                />
              </div>
            </div>
            <div>
              <label>E-mail</label>
              <div>
                <Field
                  name="email"
                  component="input"
                  type="email"
                  placeholder="E-mail"
                  onChange={this.updateEmailField}
                />
              </div>
            </div>
            <div>
              <label>Choix Atelier</label>
              <div>
                <label>
                  <Field
                    name="atelier"
                    component="input"
                    type="radio"
                    value="atelier1"
                  />{' '}
                  Atelier1
                </label>
                <label>
                  <Field
                    name="atelier"
                    component="input"
                    type="radio"
                    value="atelier2"
                  />{' '}
                  Atelier2
                </label>
              </div>
            </div>

            <div>
              <button type="submit" disabled={pristine || submitting}>
                Envoyer
              </button>
            </div>
          </form>
        </Paper>
      </Grid>
    </Grid>
  );
};

export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

import React from 'react';
import { Field, reduxForm } from 'redux-form';
import Grid from 'material-ui/Grid';
import Paper from '@material-ui/core/Paper';

const SimpleForm = (props) => {
  const {
    handleSubmit, pristine, reset, submitting,
  } = props;
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

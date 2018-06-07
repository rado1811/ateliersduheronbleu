// React
import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from '@material-ui/core/Paper';
import PropTypes from 'prop-types';
// Redux
import { Field, reduxForm } from 'redux-form';

const SimpleForm = (props) => {
  const { handleSubmit, pristine, submitting } = props;
  return (
    <Grid
      container
      style={{
        height: '100%',
      }}
    >
      <Grid item md={12} style={{ padding: 15 }} spacing={24}>
        <Paper>
          <form onSubmit={alert(JSON.stringify(values, null, 2))}>
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
                  name="prenom"
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
  form: 'simple',
})(SimpleForm);

SimpleForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired,
  pristine: PropTypes.bool.isRequired,
  submitting: PropTypes.bool.isRequired,
};

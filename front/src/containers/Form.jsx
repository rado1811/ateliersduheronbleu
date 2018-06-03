// React
import React from 'react';
import Grid from 'material-ui/Grid';
import Paper from '@material-ui/core/Paper';
// Redux
import { Field, reduxForm } from 'redux-form';
import formValueSelector from 'redux-form/lib/formValueSelector';
import { connect } from 'react-redux';

let SimpleForm = (props) => {
  const {
    handleSubmit,
    pristine,
    submitting,
    hasEmailValue,
    hasNameValue,
    fullName,
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
const selector = formValueSelector(SimpleForm);
SimpleForm = connect((state) => {
  // can select values individually
  const hasEmailValue = selector(state, 'email');
  const hasNameValue = selector(state, 'nom');
  // or together as a group
  const { firstName, lastName } = selector(state, 'nom', 'prenom');
  return {
    hasEmailValue,
    hasNameValue,
    fullName: `${firstName || ''} ${lastName || ''}`,
  };
})(SimpleForm);
// Ok les valeurs sont en props
export default reduxForm({
  form: 'simple', // a unique identifier for this form
})(SimpleForm);

import React from 'react';
import TextField from '@material-ui/core/TextField';


const TextFieldExampleSimple = () => (
  <div>
    <TextField
      hintText="Nom de l'intervenant"
      errorText="Ce champ est obligatoire."
      floatingLabelText=""
    /><br />
  </div>
);

export default TextFieldExampleSimple;
import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';

import AteliersReducer from './Ateliers';
import ActiveAteliersReducer from './Active-user';

const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer,
  form: reduxFormReducer, // mounted under "form"

})

export default allReducers;

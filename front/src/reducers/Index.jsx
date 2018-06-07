import { combineReducers } from 'redux';
import { reducer as reduxFormReducer } from 'redux-form';
import AteliersReducer from './ateliers';
import ActiveAteliersReducer from './active-user';


// combine all reducers
const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer,
  form: reduxFormReducer, // mounted under "form"
});

export default allReducers;

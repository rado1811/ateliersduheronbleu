import { combineReducers } from 'redux';

import AteliersReducer from './users';
import ActiveAteliersReducer from './active-user';

// combine all reducers 
const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer
})

export default allReducers;
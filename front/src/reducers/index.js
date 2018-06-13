import { combineReducers } from 'redux';
import AteliersReducer from './ateliers';
import ActiveAteliersReducer from './activeAteliers';

const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer,
});

export default allReducers;

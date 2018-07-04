import { combineReducers } from 'redux';
import AteliersReducer from './ateliers';
import ActiveAteliersReducer from './activeAteliers';
import IntervenantsReducer from './intervenants';
import isFromEdit from './editAtelier';

const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer,
  intervenants: IntervenantsReducer,
  edit: isFromEdit,
});

export default allReducers;

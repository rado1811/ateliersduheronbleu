import { combineReducers } from 'redux';
import AteliersReducer from './ateliers';
import ActiveAteliersReducer from './activeAteliers';
import IntervenantsReducer from './intervenants';
import isFromEdit from './editAtelier';
import isFromEditIntervenant from './editIntervenant';
import authReducer from './authReducer';


const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer,
  intervenants: IntervenantsReducer,
  edit: isFromEdit,
  editIntervenant: isFromEditIntervenant,
  auth: authReducer,
});

export default allReducers;

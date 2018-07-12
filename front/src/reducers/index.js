import { combineReducers } from 'redux';
import AteliersReducer from './ateliers';
import ActiveAteliersReducer from './activeAteliers';
import IntervenantsReducer from './intervenants';

import ParticipantsReducer from './participants';

import isFromEdit from './editAtelier';
import isFromEditIntervenant from './editIntervenant';
import authReducer from './authReducer';

const allReducers = combineReducers({
  ateliers: AteliersReducer,
  activeAteliers: ActiveAteliersReducer,
  intervenants: IntervenantsReducer,
  participants: ParticipantsReducer,
  edit: isFromEdit,
  editIntervenant: isFromEditIntervenant,
  auth: authReducer,
});

export default allReducers;

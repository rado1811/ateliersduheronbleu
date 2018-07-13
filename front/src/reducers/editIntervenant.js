const EDIT_INTERVENANT = 'EDIT_INTERVENANT';
const CLEAN_INTERVENANT = 'CLEAN_INTERVENANT';

const initialState = {
  indexIntervenantFromEdit: {},
  isFromEditIntervenant: false,
};

export default function isFromEditIntervenant(state = initialState, action) {
  switch (action.type) {
    case EDIT_INTERVENANT:
      return {
        ...state,
        indexIntervenantFromEdit: action.payload.indexIntervenantFromEdit,
        isFromEditIntervenant: true,
      };
    case CLEAN_INTERVENANT:
      return {
        ...state,
        indexIntervenantFromEdit: action.payload.indexAtelierFromEdit,
        isFromEditIntervenant: false,
      };
    default:
      return state;
  }
}

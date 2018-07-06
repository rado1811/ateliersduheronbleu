const EDIT_INTERVENANT = 'EDIT_INTERVENANT';

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
    default:
      return state;
  }
}

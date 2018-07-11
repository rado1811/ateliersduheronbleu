const EDIT_ATELIER = 'EDIT_ATELIER';
const CLEAN_ATELIER = 'CLEAN_ATELIER';

const initialState = {
  indexAtelierFromEdit: {},
  isFromEdit: false,
};

export default function isFromEdit(state = initialState, action) {
  switch (action.type) {
    case EDIT_ATELIER:
      return {
        ...state,
        indexAtelierFromEdit: action.payload.indexAtelierFromEdit,
        isFromEdit: true,
      };
    case CLEAN_ATELIER:
      return {
        ...state,
        indexAtelierFromEdit: action.payload.indexAtelierFromEdit,
        isFromEdit: false,
      };
    default:
      return state;
  }
}

const EDIT_ATELIER = 'EDIT_ATELIER';

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
    default:
      return state;
  }
}

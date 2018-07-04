const EDIT_ATELIER = 'EDIT_ATELIER';

const initialState = {
  ateliers: [],
  isFromEdit: false,
};

export default function isFromEdit(state = initialState, action) {
  switch (action.type) {
    case EDIT_ATELIER:
      return {
        ...state,
        ateliers: [],
        isFromEdit: true,
      };
    default:
      return state;
  }
}

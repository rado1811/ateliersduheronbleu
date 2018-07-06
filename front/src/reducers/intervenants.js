import { FETCH_INTERVENANTS_BEGIN, FETCH_INTERVENANTS_SUCCESS, FETCH_INTERVENANTS_FAILURE } from '../actions/intervenants';

const initialState = {
  intervenants: [{
    photo: '', nom: '', prenom: '', citation: '', parcours: ''
  }],
  loading: false,
  error: null,
};

export default function intervenantsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INTERVENANTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_INTERVENANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        intervenants: action.payload.intervenants,
      };
    case FETCH_INTERVENANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        intervenants: [],
      };
    default:
      return state;
  }
}

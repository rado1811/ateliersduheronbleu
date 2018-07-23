import { FETCH_INSCRITS_BEGIN, FETCH_INSCRITS_SUCCESS, FETCH_INSCRITS_FAILURE } from '../actions/inscrits';

const initialState = {
  inscrits: [],
  loading: false,
  error: null,
};

export default function inscritsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_INSCRITS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_INSCRITS_SUCCESS:
      return {
        ...state,
        loading: false,
        inscrits: action.payload.inscrits,
      };
    case FETCH_INSCRITS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        inscrits: [],
      };
    default:
      return state;
  }
}

import { FETCH_PARTICIPANTS_BEGIN, FETCH_PARTICIPANTS_SUCCESS, FETCH_PARTICIPANTS_FAILURE } from '../actions/participants';

const initialState = {
  participants: [],
  loading: false,
  error: null,
};

export default function participantsReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_PARTICIPANTS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_PARTICIPANTS_SUCCESS:
      return {
        ...state,
        loading: false,
        participants: action.payload.participants,
      };
    case FETCH_PARTICIPANTS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        participants: [],
      };
    default:
      return state;
  }
}

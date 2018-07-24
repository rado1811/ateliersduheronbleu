import { FETCH_PARTICIPANTS_BEGIN, FETCH_PARTICIPANTS_SUCCESS, FETCH_PARTICIPANTS_FAILURE, UPDATE_STATUS_PARTICIPANT, DELETE_PARTICIPANT } from '../actions/participants';

const initialState = {
  participants: [],
  loading: false,
  error: null,
};

export default function participantsReducer(state = initialState, action) {
  let participants = [...state.participants];
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

    case UPDATE_STATUS_PARTICIPANT:
      participants = participants.map((p) => {
        if (p['id_participant'] === action.idParticipant) {
          p.statut = action.statut;
        }
        return p;
      });
      return {
        ...state,
        participants,
      };

    case DELETE_PARTICIPANT:
      participants = participants.filter(p => p['id_participant'] !== action.idParticipant);
      return {
        ...state,
        participants,
      };
    default:
      return state;
  }
}

export const FETCH_PARTICIPANTS_BEGIN = 'FETCH_PARTICIPANTS_BEGIN';
export const FETCH_PARTICIPANTS_SUCCESS = 'FETCH_PARTICIPANTS_SUCCESS';
export const FETCH_PARTICIPANTS_FAILURE = 'FETCH_PARTICIPANTS_FAILURE';
export const UPDATE_STATUS_PARTICIPANT = 'UPDATE_STATUS_PARTICIPANT';
export const DELETE_PARTICIPANT = 'DELETE_PARTICIPANT';

export const fetchParticipantsBegin = () => ({
  type: FETCH_PARTICIPANTS_BEGIN,
});

export const fetchParticipantsSuccess = participants => ({
  type: FETCH_PARTICIPANTS_SUCCESS,
  payload: { participants },
});

export const fetchParticipantsFailure = error => ({
  type: FETCH_PARTICIPANTS_FAILURE,
  payload: { error },
});

export function fetchParticipants() {
  return (dispatch) => {
    dispatch(fetchParticipantsBegin());
    return fetch('/api/participant')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(fetchParticipantsBegin(false));
        return res.json();
      })
      .then(participants => dispatch(fetchParticipantsSuccess(participants)))
      .catch(error => dispatch(fetchParticipantsFailure(error)));
  };
}

export const updateParticipant = (idParticipant, statut) => ({
  type: UPDATE_STATUS_PARTICIPANT,
  idParticipant,
  statut,
});

export const deleteParticipant = (idParticipant) => ({
  type: DELETE_PARTICIPANT,
  idParticipant,
});


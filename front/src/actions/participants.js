export const FETCH_PARTICIPANTS_BEGIN = 'FETCH_PARTICIPANTS_BEGIN';
export const FETCH_PARTICIPANTS_SUCCESS = 'FETCH_PARTICIPANTS_SUCCESS';
export const FETCH_PARTICIPANTS_FAILURE = 'FETCH_PARTICIPANTS_FAILURE';
export const VALIDER_STATUT = 'VALIDER_STATUT';
export const ANNULER_STATUT = 'ANNULER_STATUT';
export const SUPPRIMER_STATUT = 'SUPPRIMER_STATUT';

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

export const validerStatut = indexStatutFromEdit => ({
  type: VALIDER_STATUT,
  payload: { indexStatutFromEdit },

});

export const annulerStatut = indexStatutFromEdit => ({
  type: ANNULER_STATUT,
  payload: { indexStatutFromEdit },

});

export const supprimerStatut = indexStatutFromEdit => ({
  type: SUPPRIMER_STATUT,
  payload: { indexStatutFromEdit },

});

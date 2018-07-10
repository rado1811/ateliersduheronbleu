
export const FETCH_INTERVENANTS_BEGIN = 'FETCH_INTERVENANTS_BEGIN';
export const FETCH_INTERVENANTS_SUCCESS = 'FETCH_INTERVENANTS_SUCCESS';
export const FETCH_INTERVENANTS_FAILURE = 'FETCH_INTERVENANTS_FAILURE';
export const EDIT_INTERVENANT = 'EDIT_INTERVENANT';

export const fetchIntervenantsBegin = () => ({
  type: FETCH_INTERVENANTS_BEGIN,
});

export const fetchIntervenantsSuccess = intervenants => ({
  type: FETCH_INTERVENANTS_SUCCESS,
  payload: { intervenants },
});

export const fetchIntervenantsFailure = error => ({
  type: FETCH_INTERVENANTS_FAILURE,
  payload: { error },
});

export function fetchIntervenants() {
  return (dispatch) => {
    dispatch(fetchIntervenantsBegin());
    return fetch('/api/intervenants')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(fetchIntervenantsBegin(false));
        return res.json();
      })
      .then(intervenants => dispatch(fetchIntervenantsSuccess(intervenants)))
      .catch(error => dispatch(fetchIntervenantsFailure(error)));
  };
}

export const goEditIntervenant = indexIntervenantFromEdit => ({
  type: EDIT_INTERVENANT,
  payload: { indexIntervenantFromEdit },
});

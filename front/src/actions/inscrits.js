export const FETCH_INSCRITS_BEGIN = 'FETCH_INSCRITS_BEGIN';
export const FETCH_INSCRITS_SUCCESS = 'FETCH_INSCRITS_SUCCESS';
export const FETCH_INSCRITS_FAILURE = 'FETCH_INSCRITS_FAILURE';

export const fetchInscritsBegin = () => ({
  type: FETCH_INSCRITS_BEGIN,
});

export const fetchInscritsSuccess = inscrits => ({
  type: FETCH_INSCRITS_SUCCESS,
  payload: { inscrits },
});

export const fetchInscritsFailure = error => ({
  type: FETCH_INSCRITS_FAILURE,
  payload: { error },
});
export function fetchInscrits() {
  return (dispatch) => {
    dispatch(fetchInscritsBegin());
    return fetch('/api/participant/reserve')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(fetchInscritsBegin(false));
        return res.json();
      })
      .then(inscrits => dispatch(fetchInscritsSuccess(inscrits)))
      .catch(error => dispatch(fetchInscritsFailure(error)));
  };
}
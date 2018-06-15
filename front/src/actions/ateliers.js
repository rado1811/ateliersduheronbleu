
export const FETCH_ATELIERS_BEGIN = 'FETCH_ATELIERS_BEGIN';
export const FETCH_ATELIERS_SUCCESS = 'FETCH_ATELIERS_SUCCESS';
export const FETCH_ATELIERS_FAILURE = 'FETCH_ATELIERS_FAILURE';

export const fetchAteliersBegin = () => ({
  type: FETCH_ATELIERS_BEGIN,
});

export const fetchAteliersSuccess = ateliers => ({
  type: FETCH_ATELIERS_SUCCESS,
  payload: { ateliers },
});

export const fetchAteliersFailure = error => ({
  type: FETCH_ATELIERS_FAILURE,
  payload: { error },
});

export function fetchAteliers() {
  return (dispatch) => {
    dispatch(fetchAteliersBegin());
    return fetch('/api/ateliers')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(fetchAteliersBegin(false));
        return res.json();
      })
      // .then(res => res.json())
      .then(ateliers => dispatch(fetchAteliersSuccess(ateliers)))
      .catch(error => dispatch(fetchAteliersFailure(error)));
  };
}


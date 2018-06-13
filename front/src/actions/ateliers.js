
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
  console.log('fetch start');
  return (dispatch) => {
    console.log('dispatch start');
    dispatch(fetchAteliersBegin());
    return fetch('/')
      .then((res) => {
        if (!res.ok) {
          throw Error(res.statusText);
        }
        dispatch(fetchAteliersBegin(false));
        return res;
      })
      .then(res => res.json())
      .then(ateliers => dispatch(fetchAteliersSuccess(ateliers)))
      .catch(error => dispatch(fetchAteliersFailure(error)));
  };
}


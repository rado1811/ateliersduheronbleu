import REQUEST_POSTS from '../actions/constants';

export default function posts(
  state = {
    isFetching: false,
    didInvalidate: false,
    items: [],
  },
  action,
) {
  switch (action.type) {
    case REQUEST_POSTS:
      return Object.assign({}, state, {
        didInvalidate: true,
      });

    default:
      return state;
  }
}

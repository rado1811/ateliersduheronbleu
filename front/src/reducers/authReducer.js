export default function(state = [], action) {
  switch (action.type) {
    case 'CREATE_SESSION':
      console.log('ici CREATE_SESSION', action.type);
      return { ...state, token: action.token };
    default:
      return state;
  }
}

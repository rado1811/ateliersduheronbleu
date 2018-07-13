

const activeAteliers = (state = {}, action) => {
  switch (action.type) {
    case 'ATELIERS_SELECTED':
      return action.ateliers;
    default:
      return state;
  }
};

export default activeAteliers;

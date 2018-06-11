const activeAteliers = (state = null, action) => {
  switch (action.type) {
    case 'ATELIERS_SELECTED':
      return action.ateliers;
    default:
      return state;
  }
};

export default activeAteliers;

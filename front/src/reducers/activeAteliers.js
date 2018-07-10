const initialState = {
  contenu: '',
  debut: '',
  formule: '',
  id_atelier: 0,
  id_intervenant: 0,
  lieu: '',
  nb_participants: 0,
  nom: '',
  nom_intervenant: '',
  photo: '',
  place_disponibles: 0,
  prix: 0,
  programme: '',
};

const activeAteliers = (state = initialState, action) => {
  switch (action.type) {
    case 'ATELIERS_SELECTED':
      return action.ateliers;
    default:
      return state;
  }
};

export default activeAteliers;

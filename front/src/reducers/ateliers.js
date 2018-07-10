import {
  FETCH_ATELIERS_BEGIN,
  FETCH_ATELIERS_SUCCESS,
  FETCH_ATELIERS_FAILURE,
} from '../actions/ateliers';

const initialState = {
  ateliers: [{
    id_atelier: '', nom_atelier: '', id_intervenant: '', nom: '', debut: '', nb_participants: '', prix: '', contenu: '', formule: '', lieu: '', photo: '', place_disponibles: 0, programme: '', intervenant_prenom: '',
  }],
  loading: false,
  error: null,
};

export default function ateliersReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_ATELIERS_BEGIN:
      return {
        ...state,
        loading: true,
        error: null,
      };
    case FETCH_ATELIERS_SUCCESS:
      return {
        ...state,
        loading: false,
        ateliers: action.payload.ateliers,
      };
    case FETCH_ATELIERS_FAILURE:
      return {
        ...state,
        loading: false,
        error: action.payload.error,
        ateliers: [],
      };
    default:
      return state;
  }
}

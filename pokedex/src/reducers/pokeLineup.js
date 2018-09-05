import {
  ADD_POKEMON_TO_LINEUP,
  REMOVE_POKEMON_TO_LINEUP,
  SET_POKEMON,
} from "../constants/action-types";

const initialState = {
  pokeLineup: [],
  selectedPokemon: {},
}

const pokeLineup = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON_TO_LINEUP:
      return { ...state, pokeLineup: [...state.pokeLineup, action.payload] };
    case REMOVE_POKEMON_TO_LINEUP:
      // todo implement remove
      return { ...state, pokeLineup: [...state.pokeLineup, action.payload] };
    case SET_POKEMON:
      return { ...state, selectedPokemon: action.payload }
    default:
      return state;
  }
};

export default pokeLineup;

import { ADD_POKEMON_TO_LINEUP, REMOVE_POKEMON_TO_LINEUP } from "../constants/action-types";

const initialState = {
  pokeLineup: []
}

const pokeLineup = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON_TO_LINEUP:
      return { ...state, pokeLineup: [...state.pokeLineup, action.payload] };
    case REMOVE_POKEMON_TO_LINEUP:
      // todo implement remove
      return { ...state, pokeLineup: [...state.pokeLineup, action.payload] };
    default:
      return state;
  }
};

export default pokeLineup;

import { ADD_POKEMON_TO_LIST, REMOVE_POKEMON_TO_LIST } from "../constants/action-types";

const initialState = {
  pokeList: []
}

const pokeList = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON_TO_LIST:
      return { ...state, pokeList: [...state.pokeList, action.payload] };
    case REMOVE_POKEMON_TO_LIST:
      // todo implement remove
      return { ...state, pokeList: [...state.pokeList, action.payload] };
    default:
      return state;
  }
};

export default pokeList;

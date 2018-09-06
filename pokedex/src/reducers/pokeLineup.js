import merge from "lodash/merge"
import has from "lodash/has"
import remove from "lodash/remove"
import {
  ADD_POKEMON_TO_LINEUP,
  UPDATE_POKEMON_INFO,
  REMOVE_POKEMON_TO_LINEUP,
  SET_POKEMON,
} from "../constants/action-types"


const initialState = {
  pokeLineup: [],
  selectedPokemon: {},
}

const pokeLineup = (state = initialState, action) => {
  switch (action.type) {
    case ADD_POKEMON_TO_LINEUP:
      return { ...state, pokeLineup: [...state.pokeLineup, action.payload], selectedPokemon: {} }
    case REMOVE_POKEMON_TO_LINEUP:
      remove(state.pokeLineup, (pkmn) => pkmn.id === parseInt(action.payload.id))
      return {...state, pokeLineup: [...state.pokeLineup], selectedPokemon: {}}
    case SET_POKEMON:
      return { ...state, selectedPokemon: action.payload }
    case UPDATE_POKEMON_INFO:
      const pokemon = state.pokeLineup.find((pkmn) => pkmn.id === action.payload.id)
      merge(pokemon, action.payload)
      // persist payload data on selectedMoves
      if (has(action.payload, "selectedMoves")) {
        pokemon.selectedMoves = action.payload.selectedMoves
      }

      return {...state, pokeLineup: [...state.pokeLineup], selectedPokemon: {}}
    default:
      return state;
  }
};

export default pokeLineup;

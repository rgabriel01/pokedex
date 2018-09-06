import {
  ADD_POKEMON_TO_LINEUP,
  UPDATE_POKEMON_INFO,
  REMOVE_POKEMON_TO_LINEUP,
  SET_POKEMON,
} from "../constants/action-types"

// pokemon lineup
export const addPokemonToLineup = pokemon => ({
  type: ADD_POKEMON_TO_LINEUP, payload: pokemon
})

export const removePokemonToLineup = pokemon => ({
  type: REMOVE_POKEMON_TO_LINEUP, payload: pokemon
})

export const setPokemon = pokemon => ({
  type: SET_POKEMON, payload: pokemon
})

export const updatePokemonInfo = pokeData => ({
  type: UPDATE_POKEMON_INFO, payload: pokeData
})

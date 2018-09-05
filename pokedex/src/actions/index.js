import {
  ADD_ARTICLE,
  ADD_POKEMON_TO_LIST,
  REMOVE_POKEMON_TO_LIST,
  ADD_POKEMON_TO_LINEUP,
  REMOVE_POKEMON_TO_LINEUP
} from "../constants/action-types"

export const addArticle = article => ({
  type: ADD_ARTICLE, payload: article
});

// pokemon list
export const addPokemonToList = pokemon => ({
  type: ADD_POKEMON_TO_LIST, payload: pokemon
});

export const removePokemonToList = pokemon => ({
  type: REMOVE_POKEMON_TO_LIST, payload: pokemon
});

// pokemon lineup
export const addPokemonToLineup = pokemon => ({
  type: ADD_POKEMON_TO_LINEUP, payload: pokemon
});

export const removePokemonToLineup = pokemon => ({
  type: REMOVE_POKEMON_TO_LINEUP, payload: pokemon
});

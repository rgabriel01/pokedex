import { combineReducers } from  "redux";

import article from "./article";
import pokeLineup from "./pokeLineup";
import pokeList from "./pokeList";

const rootReducer = combineReducers({
  articles: article,
  pokeList: pokeList,
  pokeLineup: pokeLineup
});

export default rootReducer;

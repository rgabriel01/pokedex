import { combineReducers } from  "redux";

import article from "./article";
import pokeLineup from "./pokeLineup";

const rootReducer = combineReducers({
  articles: article,
  pokeLineup: pokeLineup
});

export default rootReducer;

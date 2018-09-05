import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import store from "./store/index";
import { addPokemonToList, addArticle } from "./actions/index";

// window.store.dispatch(addArticle({name: "charmander", id: 1}))
ReactDOM.render(
  <App />,
  document.getElementById('root')
)
registerServiceWorker();

import React, { Component } from 'react';
import store from "./store/index";
import Info from "./components/Info";
import Lineup from "./components/lineup/Index";
import List from "./components/list/Index";
import isEmpty from "lodash/isEmpty";
import { setPokemon } from "./actions/index"
window.App = {};

class App extends Component {
  constructor(props) {
    super(props);
    this.state = store.getState();
  }

  componentDidMount() {
    window.App.store = store;
    window.App.store.subscribe(this.updateState);
  }

  updateState = () => {
    console.log("updating state!")
    this.setState(window.App.store.getState());
  }

  loadPokedataHandler = (event) => {
    const target = event.currentTarget
    const pokeId = target.dataset.id
    const pokemons = this.state.pokeLineup.pokeLineup
    const selectedPokemon = pokemons.filter((pokemon) => pokemon.id == pokeId)[0]
    window.App.store.dispatch(setPokemon(selectedPokemon))
  }

  renderInfo = () => {
    const {selectedPokemon} = this.state
    if (isEmpty(this.state.selectedPokemon)) { return }
    <Info pokeData={selectedPokemon}/>
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-8">
            <Lineup loadPokedataHandler={this.loadPokedataHandler} {...this.state}/>
            {this.renderInfo()}
          </div>
          <div className="col-sm-4">
            <List />
          </div>
        </div>
      </div>
    );
  }
}

export default App;

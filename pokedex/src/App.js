import React, { Component } from 'react'
import pick from "lodash/pick"
import isEmpty from "lodash/isEmpty"
import wallpaper from "./images/wallpaper.jpg"
import store from "./store/index"
import Info from "./components/info/Index"
import Lineup from "./components/lineup/Index"
import List from "./components/list/Index"
import { setPokemon, removePokemonToLineup } from "./actions/index"
window.App = {}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = store.getState()
  }

  componentDidMount() {
    window.App.store = store
    window.App.store.subscribe(this.updateState)
  }

  updateState = () => {
    console.log("updating state!")
    this.setState(window.App.store.getState())
  }

  loadPokedataHandler = (event) => {
    const target = event.currentTarget
    const pokeId = target.dataset.id
    const pokemons = this.state.pokeLineup.pokeLineup
    const selectedPokemon = pokemons.filter((pokemon) => pokemon.id == pokeId)[0]
    window.App.store.dispatch(setPokemon(selectedPokemon))
  }

  removePokemonFromLineupHandler = (event) => {
    const target = event.currentTarget
    const pokeId = target.dataset.id
    window.App.store.dispatch(removePokemonToLineup({id: pokeId}))
  }

  renderInfo = () => {
    const { selectedPokemon = {} } = this.state.pokeLineup
    if (isEmpty(selectedPokemon)) { return }
    const pokeData = pick(selectedPokemon, ["id", "selectedMoves", "nickname", "moves"])
    const  key = Math.random().toString(36).slice(2)
    return <Info key={key} {...pokeData}/>
  }

  renderLineup = () => {
    const { pokeLineup } = this.state.pokeLineup
    console.log(pokeLineup)
    return (isEmpty(pokeLineup)) ?
            <img src={wallpaper} alt="pokedex"/> :
            <Lineup
              removePokemonFromLineupHandler={this.removePokemonFromLineupHandler}
              loadPokedataHandler={this.loadPokedataHandler}
              {...this.state}
            />
  }

  render() {
    return (
      <div className="container">
        <div className="row mt-5">
          <div className="col-sm-8">
            {this.renderLineup()}
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

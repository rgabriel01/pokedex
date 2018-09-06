import React, { Component } from "react";
import { POKE_API_URL } from "../../constants/urls";
import InformationCard from "./InformationCard";
import pick from "lodash/pick";
import isEmpty from "lodash/isEmpty";
import { addPokemonToLineup } from "../../actions/index"

class List extends Component {
  defaultState = {
    id: 0,
    name: "",
    abilities: [],
    base_experience: 0,
    height: 0,
    weight: 0,
    sprites: "",
    stats: [],
    types: [],
  }

  constructor(props) {
    super(props);
    this.state = Object.assign({}, this.defaultState)
  }

  searchPokemon = () => {
    const input = document.getElementById("js-search-text");
    const query = input.value;
    fetch(`${POKE_API_URL}${query}`)
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState(this.formatJson(jsonResponse))
        input.value = ""
      });
  }

  addToLineup = () => {
    const hashClone = Object.assign({}, this.state)
    window.App.store.dispatch(addPokemonToLineup(hashClone))
    this.setState(Object.assign({}, this.defaultState))
  }

  fields = ["id", "name","height", "weight", "base_experience", "sprites", "moves", "abilities", "stats", "types"]

  formatJson = (json) => {
    let stateHash = pick(json, this.fields)

    let moves = stateHash.moves.map((mve) => {
      const { move = {} } = mve
      return move.name
    })

    let abilities = stateHash.abilities.map((abl) => {
      const { ability = {} } = abl
      return ability.name
    })

    let stats = stateHash.stats.map((sts) => {
      const { stat = {} } = sts
      return `${stat.name} (${sts.base_stat})`
    })

    let types = stateHash.types.map((typ) => {
      const { type = {} } = typ
      return type.name
    })

    let {front_default = ""} = stateHash.sprites

    return Object.assign(stateHash, {sprites: front_default, moves: moves, abilities: abilities, stats: stats, types: types} )
  }

  renderInformationCard = () => {
    const { name } = this.state
    if (isEmpty(name)) { return [] }
    return <InformationCard addToLineupHandler={this.addToLineup} { ...this.state }/>
  }

  render() {
    return (
      <div className="row">
        <div className="col-sm-12">
          <div className="row">
            <div className="input-group mb-3">
              <input type="text" className="form-control" id="js-search-text"/>
              <div className="input-group-append">
                <button
                  type="button"
                  className="btn btn-outline-secondary"
                  onClick={this.searchPokemon}
                >
                    Search!
                </button>
              </div>
            </div>
          </div>
          {this.renderInformationCard()}
        </div>
      </div>
    )
  }
}

export default List;

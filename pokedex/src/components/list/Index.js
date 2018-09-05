import React, { Component } from "react";
import { POKE_API_URL } from "../../constants/urls";
import InformationCard from "./InformationCard";
import pick from "lodash/pick";
import isEmpty from "lodash/isEmpty";

class List extends Component {
  constructor(props) {
    super(props);
    this.state = {}
  }

  searchPokemon = () => {
    const query = document.getElementById("js-search-text").value;
    fetch(`${POKE_API_URL}${query}`)
      .then(response => response.json())
      .then(jsonResponse => {
        this.setState(this.formatJson(jsonResponse))
      });
  }

  fields = ["id", "name","height", "weight", "base_experience", "abilities", "stats", "types"]

  formatJson = (json) => {
    let stateHash = pick(json, this.fields)

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

    return Object.assign(stateHash, {abilities: abilities, stats: stats, types: types} )
  }

  renderInformationCard = () => {
    const { name } = this.state
    if (isEmpty(name)) { return }
    return <InformationCard { ...this.state }/>
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

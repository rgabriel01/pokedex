import React from "react";

const Lineup = ({
  removePokemonFromLineupHandler,
  loadPokedataHandler,
  pokeLineup
}) => {

  const renderPokeLineup = () => {
    const {pokeLineup: pokemons} = pokeLineup
    return pokemons.map((pokemon) => {
      return (
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <h5 className="card-title">{pokemon.name}</h5>
              <h6 className="card-subtitle mb-2 text-muted">{pokemon.types.join()}</h6>
              <img src={pokemon.sprites} alt={pokemon.name} className="rounded mx-auto d-block" />
              <hr/>
              <a data-id={pokemon.id} onClick={loadPokedataHandler} href="#" className="card-link">Pokedata</a>
              <a data-id={pokemon.id} onClick={removePokemonFromLineupHandler} href="#" className="card-link">Remove</a>
            </div>
          </div>
        </div>
      )
    })
  }

  return (
    <div className="row">
      {renderPokeLineup()}
    </div>
  )
};

export default Lineup;

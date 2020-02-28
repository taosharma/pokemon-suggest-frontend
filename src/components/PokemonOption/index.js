import React from "react";

function PokemonOption({ pokemon, inputSearch }) {
  return <li onClick={() => inputSearch(pokemon.name)}>{pokemon.name}</li>;
}

export default PokemonOption;

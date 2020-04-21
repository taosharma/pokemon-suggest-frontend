import React, { useState, useEffect } from "react";
import PokemonOption from "../PokemonOption";

function AutoCompleteSearch({ searchTerms, inputSearch }) {
  const [matchingPokemon, setMatchingPokemon] = useState([]);

  function seeMatchingPokemon() {
    fetch(`http://localhost:5000/pokemon?search=${searchTerms}`)
      .then(response => response.json())
      .then(data => setMatchingPokemon(data));
  }

  useEffect(() => {
    seeMatchingPokemon();
  }, [searchTerms]);

  return (
    <section>
      <ol>
        {matchingPokemon.map(pokemon => (
          <PokemonOption
            inputSearch={inputSearch}
            pokemon={pokemon}
            key={pokemon._id}
          />
        ))}
      </ol>
    </section>
  );
}

export default AutoCompleteSearch;

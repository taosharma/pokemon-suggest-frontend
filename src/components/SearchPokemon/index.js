import React from "react";

function SearchPokemon({ searchTerms, inputSearch, inputResult }) {
  function handleInput(event) {
    const newSearch = event.target.value;
    inputSearch(newSearch);
  }
  return (
    <section>
      <input value={searchTerms} onChange={handleInput}></input>
      <button onClick={() => inputResult(searchTerms)}>Display Pokemon</button>
    </section>
  );
}

export default SearchPokemon;

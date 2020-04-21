import React, { useState } from "react";
import "./PokeSuggest.css";

import SearchPokemon from "../SearchPokemon";
import AutoCompleteSearch from "../AutoCompleteSearch";
import DisplayPokemon from "../DisplayPokemon";

const emptySearch = "";
const emptyResult = "";

function PokeSuggest() {
  const [searchTerms, setSearchTerms] = useState(emptySearch);
  const [searchResult, setSearchResult] = useState(emptyResult);

  function inputSearch(search) {
    setSearchTerms(search);
  }

  function inputResult(result) {
    fetch(`http://localhost:5000/pokemon?name=${result}`)
      .then(response => response.json())
      .then(data => setSearchResult(data));
  }

  return (
    <section>
      <section>
        <SearchPokemon
          searchTerms={searchTerms}
          inputSearch={inputSearch}
          inputResult={inputResult}
        />
        <AutoCompleteSearch
          searchTerms={searchTerms}
          inputSearch={inputSearch}
        />
      </section>
      <section>
        <DisplayPokemon searchResult={searchResult} />
      </section>
    </section>
  );
}

export default PokeSuggest;

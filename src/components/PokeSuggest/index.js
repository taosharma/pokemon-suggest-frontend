import React, { useState, useEffect } from "react";
import "./PokeSuggest.css";

import SearchPokemon from "../SearchPokemon";
import AutoCompleteSearch from "../AutoCompleteSearch";
import DisplayPokemon from "../DisplayPokemon";

const pokedex = [
  {
    _id: "557a723880a20c9db3bc31c2",
    pkdx_id: 1,
    name: "Bulbasaur",
    description:
      "Bulbasaur can be seen napping in bright sunlight. There is a seed on its back. By soaking up the sun's rays, the seed grows progressively larger. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/001.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        level: 16,
        method: "level_up",
        to: "Ivysaur",
        _id: "557a723880a20c9db3bc31c3"
      }
    ]
  },
  {
    _id: "557a723980a20c9db3bc31e3",
    pkdx_id: 2,
    name: "Ivysaur",
    description:
      "There is a bud on this Pokémon's back. To support its weight, Ivysaur's legs and trunk grow thick and strong. If it starts spending more time lying in the sunlight, it's a sign that the bud will bloom into a large flower soon. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/002.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        level: 32,
        method: "level_up",
        to: "Venusaur",
        _id: "557a723980a20c9db3bc31e4"
      }
    ]
  },
  {
    _id: "557a723880a20c9db3bc31cc",
    pkdx_id: 3,
    name: "Venusaur",
    description:
      "There is a large flower on Venusaur's back. The flower is said to take on vivid colors if it gets plenty of nutrition and sunlight. The flower's aroma soothes the emotions of people. ",
    img_url: "http://assets22.pokemon.com/assets/cms2/img/pokedex/full/003.png",
    types: ["poison", "grass"],
    evolutions: [
      {
        method: "other",
        to: "Venusaur-mega",
        _id: "557a723880a20c9db3bc31cd"
      }
    ]
  }
];

const emptySearch = "";
const emptyResult = "";

function PokeSuggest() {
  const [searchTerms, setSearchTerms] = useState(emptySearch);
  const [searchResult, setSearchResult] = useState(emptyResult);

  function inputSearch(search) {
    setSearchTerms(search);
  }

  function inputResult(result) {
    let finalPokemon = pokedex.filter(pokemon => pokemon.name.includes(result));
    setSearchResult(finalPokemon);
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

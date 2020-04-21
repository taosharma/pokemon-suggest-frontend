import React from "react";

function DisplayPokemon({ searchResult }) {
  console.log(searchResult);
  return (
    <section>
      <img alt={searchResult.name} src={searchResult.img_url}></img>
      <p>{searchResult.name}</p>
      <p>{searchResult.description}</p>
    </section>
  );
}

export default DisplayPokemon;

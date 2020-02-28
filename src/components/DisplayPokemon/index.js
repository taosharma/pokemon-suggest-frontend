import React from "react";

function DisplayPokemon({ searchResult }) {
  return (
    <section>
      <img src={searchResult.img_url}></img>
      <p>{searchResult.name}</p>
      <p>{searchResult.description}</p>
    </section>
  );
}

export default DisplayPokemon;

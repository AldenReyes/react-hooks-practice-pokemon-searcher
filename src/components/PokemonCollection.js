import React from "react";
import PokemonCard from "./PokemonCard";
import { Card } from "semantic-ui-react";

function PokemonCollection({ pokemonToDisplay }) {
  if (pokemonToDisplay === []) {
    return <div>Loading ...</div>;
  } else {
    const cards = pokemonToDisplay.map((pokemon) => (
      <PokemonCard
        key={pokemon.id}
        name={pokemon.name}
        hp={pokemon.hp}
        sprites={pokemon.sprites}
      />
    ));
    return <Card.Group itemsPerRow={6}>{cards}</Card.Group>;
  }
}

export default PokemonCollection;

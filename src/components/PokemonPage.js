import React, { useEffect, useState } from "react";
import PokemonCollection from "./PokemonCollection";
import PokemonForm from "./PokemonForm";
import Search from "./Search";
import { Container } from "semantic-ui-react";

function PokemonPage() {
  const [pokemonList, setPokemonList] = useState([]);
  const [search, setSearch] = useState("");

  const pokemonToDisplay = pokemonList.filter((pokemon) => {
    if (search) {
      return pokemon.name.toLowerCase().includes(search.toLowerCase());
    } else {
      return true;
    }
  });

  useEffect(() => {
    fetch("http://localhost:3001/pokemon")
      .then((res) => res.json())
      .then((data) => setPokemonList(data));
  }, []);

  function handleSearch(event) {
    setSearch(event.target.value.toLowerCase());
    pokemonList.filter((pokemon) =>
      search.includes(pokemon.name.toLowerCase())
    );
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm />
      <br />
      <Search onHandleSearch={handleSearch} search={search} />
      <br />
      <PokemonCollection pokemonToDisplay={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;

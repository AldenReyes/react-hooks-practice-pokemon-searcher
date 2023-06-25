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

  function handleFormSubmit(event, formData) {
    const newPokemon = {
      name: formData.name,
      hp: formData.hp,
      sprites: {
        front: formData.frontUrl,
        back: formData.backUrl,
      },
    };
    event.preventDefault();
    fetch("http://localhost:3001/pokemon", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newPokemon),
    })
      .then((res) => res.json())
      .then((data) => setPokemonList([...pokemonList, data]))
      .catch((error) => console.log("ERROR:", error));
  }

  return (
    <Container>
      <h1>Pokemon Searcher</h1>
      <br />
      <PokemonForm onHandleFormSubmit={handleFormSubmit} />
      <br />
      <Search onHandleSearch={handleSearch} search={search} />
      <br />
      <PokemonCollection pokemonToDisplay={pokemonToDisplay} />
    </Container>
  );
}

export default PokemonPage;

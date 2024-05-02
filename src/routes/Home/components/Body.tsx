import React, { useContext } from "react";
import Card from "../../../components/Card/Card";
import { SearchContext } from "../../../context/SearchContext";
import usePokemonList from "../../../hooks/usePokemonList";

const Body: React.FC = () => {
  const { searchTerm } = useContext(SearchContext);
  const { pokemonList, loading, error } = usePokemonList();

  // Filter the pokemon list based on the searchterm (if any)
  const filteredList = searchTerm ? pokemonList.filter((pokemon) => pokemon.name.toLowerCase().includes(searchTerm.toLowerCase())) : pokemonList.slice(0, 20); // show first 20 pokemons if no searchTerm

  return <div className="grid grid-cols-2 gap-2 p-2">{loading || !pokemonList.length ? <div>Loading..</div> : error ? <div>Something is wrong..</div> : filteredList.map((pokemon) => <Card key={pokemon.name} name={pokemon.name} />)}</div>;
};

export default Body;

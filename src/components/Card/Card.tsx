import React, { useCallback } from "react";
import usePokemonDetails from "../../hooks/usePokemonDetail";
import { useNavigate } from "react-router-dom";

interface CardProps {
  name: string;
}

const Card: React.FC<CardProps> = ({ name }) => {
  const { pokemonDetails, loading, error } = usePokemonDetails(name);
  const navigate = useNavigate();

  // ! todo: code for handleclick
  const handleClickCard = useCallback(() => {
    navigate(`/pokemon/${name}`);
  }, [name, navigate]);

  if (loading || !pokemonDetails) return <div>Loading...</div>;
  if (error) return <div>Not found...</div>;
  return (
    <div onClick={handleClickCard} className="bg-white p-3 rounded-lg m-auto">
      <img src={pokemonDetails.artworkFront} alt="pokemon" className="" />
      <div className="capitalize text-center font-semibold">{pokemonDetails.name}</div>
    </div>
  );
};

export default Card;

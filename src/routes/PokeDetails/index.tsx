import React from "react";
import { useParams } from "react-router-dom";
import usePokemonDetails from "../../hooks/usePokemonDetail";
import MobileWrapper from "../../components/MobileWrapper/MobileWrapper";
import Header from "../../components/Header/Header";

// interface pokemonDetails {
//   name: string;
//   id: number;
//   health: number;
//   attack: number;
//   defense: number;
//   spriteFront: string;
//   artworkFront: string;
// }

const PokeDetails: React.FC = () => {
  const { pokemonName = "" } = useParams<{ pokemonName: string }>(); //extract name
  const { pokemonDetails, loading, error } = usePokemonDetails(pokemonName);

  if (loading) return <div>Loading..</div>;
  if (error) return <div>Something went wrong..</div>;
  if (!pokemonName || !pokemonDetails) return <div>Not found!</div>;

  return (
    <MobileWrapper>
      <div className="border-b-2 border-[#3D4466] items-center p-3">
        <Header />
      </div>
      <img className="w-full relative mb-3" src={pokemonDetails.artworkFront} alt="pokemon" />
      <div className="flex justify-between items-center mx-auto w-full relative mb-1">
        <span className="capitalize text-4xl font-semibold text-white">{pokemonDetails.name}</span>
        <img src={pokemonDetails.spriteFront} alt="sprite" />
      </div>
      <div className="bg-[#05091B] rounded-2xl p-4 flex flex-col gap-2">
        <div className="border-b-[#3D4466] border-b-2 w-5/6 m-auto flex flex-col gap-1 pb-3">
          <p className="text-[#97A0CC] font-normal text-lg">Health</p>
          <div className="w-full bg-gray-200 rounded-full h-2.5 dark:bg-gray-700">
            <div className="bg-blue-600 h-2.5 rounded-full" style={{ width: `${pokemonDetails.health}%` }}></div>
          </div>
          <p className="font-semibold text-2xl text-white">
            {pokemonDetails.health}
            <span className="font-normal text-base"> from 100</span>
          </p>
        </div>
        <div className="w-5/6 mx-auto">
          <div className="w-full grid grid-cols-2 text-[#97A0CC] text-base font-normal">
            <p>Attack</p>
            <p>Defense</p>
          </div>
          <div className="w-full grid grid-cols-2 text-white text-2xl font-normal">
            <p>{pokemonDetails.attack}</p>
            <p>{pokemonDetails.defense}</p>
          </div>
        </div>
      </div>
    </MobileWrapper>
  );
};

export default PokeDetails;

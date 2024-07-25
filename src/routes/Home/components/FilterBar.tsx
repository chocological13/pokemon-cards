import React, { useEffect } from "react";
import { Select, Option } from "@material-tailwind/react";
import { useState } from "react";
import usePokemonDetails, { PokemonDetails } from "../../../hooks/usePokemonDetail";

const FilterBar: React.FC = () => {
  // const { pokemonDetails, loading, error } = usePokemonDetails("");

  // const [selectedOption, setSelectedOption] = useState<string | undefined>(undefined);

  const [option, setOption] = useState("");

  // Function to handle option selection
  const handleChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    setOption(event.target.value);
  };

  // options

  // useEffect(() => {
  //   if (pokemonDetails) {

  //   }
  // }, [pokemonDetails]);

  // console.log("pokeDet: " + error);

  // if (loading) return <p>Loading Pokemon Details...</p>;
  // if (error) return <p>Not found...</p>;
  // if (!pokemonDetails) return <p>No Pokemon details found...</p>;

  const options = [
    { value: "name", label: "Name" },
    { value: "id", label: "ID" },
    { value: "health", label: "Health" },
    { value: "attack", label: "Attack" },
    { value: "defense", label: "Defense" }
  ];

  return (
    <div className="w-full">
      <Select onChange={(e) => setOption(e)} label="Filter by..." value={option} className="bg-white h-5">
        {options.map((item) => (
          <Option key={item.value} value={item.value}>
            {item.label}
          </Option>
        ))}
      </Select>
    </div>
  );
};

export default FilterBar;

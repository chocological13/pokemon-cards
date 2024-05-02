import React, { useContext, useState } from "react";
// import usePokemonList from "../../hooks/usePokemonList";
import MagnifyingGlass from "../../assets/Vector.png";
import { SearchContext } from "../../context/SearchContext";

// interface SearchProps {
//   onSearch: (pokemonName: string) => void;
// }

const SearchBar: React.FC = () => {
  // controls visibility of searchbar
  const [showSearch, setShowSearch] = useState(false);

  // holds current search term in search bar
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  // !

  // toggles visibility on searchbar
  const toggleSearch = () => {
    setShowSearch(!showSearch);
  };

  // searchBar magnifying glass
  const searchButton = (
    <button type="button" onClick={toggleSearch} className="mr-[20px]">
      <img src={MagnifyingGlass} alt="Search Pokemon" className="w-8 h-8" />
    </button>
  );

  // changes the searchTerm whenever it's changed
  const handleSearchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    event.preventDefault();
    setSearchTerm(event.target.value);
    console.log(event.target.value);
  };

  const searchForm = <input value={searchTerm} type="text" placeholder="Search Pokemon.." onChange={handleSearchChange} />;

  return (
    <div className="relative">
      {!showSearch && searchButton}
      {showSearch && searchForm}
    </div>
  );
};

export default SearchBar;

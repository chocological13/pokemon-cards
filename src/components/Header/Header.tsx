import React from "react";
import HeaderPic from "../../assets/pokemon-header.png";
import SearchBar from "./SearchBar";

interface HeaderProps {
  searchBar?: boolean;
}

const Header: React.FC<HeaderProps> = ({ searchBar }) => {
  return (
    <div className="">
      <a href="/">
        <img className="p-1" src={HeaderPic} alt="" />
      </a>
      {searchBar ? <SearchBar /> : null}
    </div>
  );
};

export default Header;

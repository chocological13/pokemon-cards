import React from "react";
import Header from "../../components/Header/Header";
import Body from "./components/Body";
import SearchBar from "../../components/Header/SearchBar";
import { SearchProvider } from "../../context/SearchProvider";
import MobileWrapper from "../../components/MobileWrapper/MobileWrapper";
// import usePokemonList from "../../hooks/usePokemonList";

const Home: React.FC = () => {
  return (
    <MobileWrapper>
      <SearchProvider>
        <div className="">
          <div className="flex justify-between border-b-2 border-[#3D4466] items-center p-3">
            <Header />
            <SearchBar />
          </div>
          <div>
            <Body />
          </div>
        </div>
      </SearchProvider>
    </MobileWrapper>
  );
};

export default Home;

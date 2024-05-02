import React, { useState } from "react";
import { SearchContext } from "./SearchContext";

export const SearchProvider: React.FC<{ children: JSX.Element | JSX.Element[] }> = ({ children }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearchTermChange = (newTerm: string) => {
    setSearchTerm(newTerm);
  };

  const contextValue = {
    searchTerm,
    setSearchTerm: handleSearchTermChange
  };

  return <SearchContext.Provider value={contextValue}>{children}</SearchContext.Provider>;
};

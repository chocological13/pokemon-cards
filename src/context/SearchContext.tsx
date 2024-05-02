import { createContext } from "react";

interface SearchContextProps {
  searchTerm: string;
  setSearchTerm: (term: string) => void;
}

export const SearchContext = createContext<SearchContextProps>({
  searchTerm: "",
  setSearchTerm: () => {}
});

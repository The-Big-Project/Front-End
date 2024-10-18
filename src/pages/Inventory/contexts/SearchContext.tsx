/** @format */

import {
  ChangeEvent,
  createContext,
  type ReactNode,
  useContext,
  useState,
} from "react";

type SearchProviderProps = {
  children: ReactNode;
};

type SearchContextValue = {
  searchQuery: string;
  handleSearch: (event: ChangeEvent<HTMLInputElement>) => void;
};

const SearchContext = createContext<SearchContextValue>();

export function SearchProvider({ children }: SearchProviderProps) {
  const [searchQuery, setSearchQuery] = useState<string>("");

  function handleSearch(event: ChangeEvent<HTMLInputElement>) {
    setSearchQuery(event.target.value);
  }

  const contextValue = {
    searchQuery: searchQuery as string,
    handleSearch: handleSearch,
  };

  return (
    <SearchContext.Provider value={contextValue}>
      {children}
    </SearchContext.Provider>
  );
}

export function useSearchContext() {
  const value = useContext(SearchContext);
  return (
    value ||
    new Error("The search provider is used outside the Search Context Provider")
  );
}

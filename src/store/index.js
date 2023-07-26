import React, { createContext, useState } from "react";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [searchResult, setSearchResult] = useState([]);

  return (
    <GlobalStateContext.Provider
      value={{
        searchResult,
        setSearchResult,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };
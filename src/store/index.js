import React, { createContext, useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";

const GlobalStateContext = createContext();

const GlobalStateProvider = ({ children }) => {
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("q") ?? "");
  const [searchResult, setSearchResult] = useState([]);
  const [comicDetails, setComicDetails] = useState(null);
  const [favorites, setFavorites] = useState(() => {
    return JSON.parse(localStorage.getItem("favorites") ?? "[]");
  });
  const [characterModal, setCharacterModal] = useState(null);

  const addCharacterToFavorites = (character) => {
    const isInFavIndex = favorites.findIndex((fav) => {
      return fav.id === character.id;
    });

    if (isInFavIndex === -1) {
      setFavorites([character, ...favorites]);
    } else {
      setFavorites(
        favorites.filter(function (fav) {
          return fav.id !== character.id;
        })
      );
    }
  };

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites.length]);

  return (
    <GlobalStateContext.Provider
      value={{
        query,
        setQuery,
        searchResult,
        setSearchResult,
        favorites,
        addCharacterToFavorites,
        characterModal,
        setCharacterModal,
        comicDetails,
        setComicDetails,
      }}
    >
      {children}
    </GlobalStateContext.Provider>
  );
};

export { GlobalStateProvider, GlobalStateContext };

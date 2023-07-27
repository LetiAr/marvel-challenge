import { useContext, useEffect } from "react";
import { searchCharacters } from "../api";
import { GlobalStateContext } from "../store";

export default function useCharacterSearch({ query }) {
  const { setSearchResult } = useContext(GlobalStateContext);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query) {
        const result = await searchCharacters(query);
        setSearchResult(result.data.results);
      } else {
        setSearchResult([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, setSearchResult]);
}
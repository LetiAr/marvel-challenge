import { useContext, useEffect } from "react";
import { getComic } from "../api";
import { GlobalStateContext } from "../store";
import { marvelComicUrlPattern } from "../constants";

export default function useComicSearch({ query }) {
  const { setComicDetails } = useContext(GlobalStateContext);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query) {
        const comicId = query.match(marvelComicUrlPattern);
        const result = await getComic(comicId[1]);
        setComicDetails(result.data.results[0]);
      } else {
        setComicDetails([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);
}
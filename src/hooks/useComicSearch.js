import { useContext, useEffect } from "react";
import { getComicById, getComicByTitle } from "../api";
import { GlobalStateContext } from "../store";
import { marvelComicTitlePattern, marvelComicUrlPattern } from "../constants";

export default function useComicSearch({ query }) {
  const { setComicDetails } = useContext(GlobalStateContext);

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query) {
        const comicId = query.match(marvelComicUrlPattern);
        if (comicId !== null) {
            const result = await getComicById(comicId[1]);
            setComicDetails(result.data.results[0]);
          } else {
            const comicData = query.match(marvelComicTitlePattern);
            if (comicData !== null && comicData.length === 4) {
              const result = await getComicByTitle(
                comicData[1],
                comicData[2],
                comicData[3]
              );
              setComicDetails(result.data.results[0]);
            }
          }
      } else {
        setComicDetails([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query, setComicDetails]);
}
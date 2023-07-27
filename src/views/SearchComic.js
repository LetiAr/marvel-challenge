import { useContext } from "react";
import { GlobalStateContext } from "../store";
import useComicSearch from "../hooks/useComicSearch";

export default function SearchComic() {
  const { comicDetails, query } = useContext(GlobalStateContext);
  useComicSearch({ query });

  if (comicDetails === null) return null;

  return (
    <div>
      <h1>{comicDetails.title}</h1>
      <p>{comicDetails.description}</p>
      <img
        src={`${comicDetails.thumbnail.path}.${comicDetails.thumbnail.extension}`}
      />
    </div>
  );
}
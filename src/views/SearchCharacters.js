import { useContext } from "react";
import Card from "../components/Card";
import { CardsContainer } from "../components/layout/CardsContainer";
import { GlobalStateContext } from "../store";
import useCharacterSearch from "../hooks/useCharacterSearch";

export default function SearchCharacters() {
  const { searchResult, query } = useContext(GlobalStateContext);
  useCharacterSearch({ query });
  

  return (
    <CardsContainer>
      {searchResult.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </CardsContainer>
  );
}

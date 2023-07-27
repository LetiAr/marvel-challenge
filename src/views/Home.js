import { useContext, useMemo } from "react";
import Card from "../components/Card";
import { CardsContainer } from "../components/layout/CardsContainer";
import { GlobalStateContext } from "../store";
import useCharacterSearch from "../hooks/useCharacterSearch";
import { PopularCharacters as chars } from "../constants";

export default function Home() {
  const { searchResult } = useContext(GlobalStateContext);
  const randomChar = useMemo(() => {
    return chars[Math.floor(Math.random() * chars.length)];
  }, []);

  useCharacterSearch({
    query: randomChar,
  });

  return (
    <CardsContainer>
      {searchResult.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </CardsContainer>
  );
}
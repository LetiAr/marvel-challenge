import { useContext } from "react";
import Card from "../components/Card";
import { CardsContainer } from "../components/layout/CardsContainer";
import { GlobalStateContext } from "../store";

export default function Home() {
  const { searchResult } = useContext(GlobalStateContext);

  return (
    <CardsContainer>
      {searchResult.map((character) => {
        return (
          <Card
            key={character.id}
            name={character.name}
            thumbnail={character.thumbnail}
          />
        );
      })}
    </CardsContainer>
  );
}

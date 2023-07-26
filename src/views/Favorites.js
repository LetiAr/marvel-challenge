import { useContext } from "react";
import Card from "../components/Card";
import { CardsContainer } from "../components/layout/CardsContainer";
import { GlobalStateContext } from "../store";

export default function Favorites() {
  const { favorites } = useContext(GlobalStateContext);

  return (
    <CardsContainer>
      {favorites.map((character) => {
        return <Card key={character.id} character={character} />;
      })}
    </CardsContainer>
  );
}

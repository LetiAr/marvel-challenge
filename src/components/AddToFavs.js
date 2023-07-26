import { BsStar, BsStarFill } from "react-icons/bs";
import themes from "../themes";
import { useContext } from "react";
import { GlobalStateContext } from "../store";
import styled from "styled-components";

const Button = styled.button`
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

export default function ({ character }) {
  const { favorites, addCharacterToFavorites } = useContext(GlobalStateContext);

  const isInFavIndex = favorites.findIndex((fav) => {
    return fav.id === character.id;
  });

  const Star = isInFavIndex === -1 ? BsStar : BsStarFill;

  return (
    <Button
      onClick={(event) => {
        event.stopPropagation();
        addCharacterToFavorites(character);
      }}
    >
      <Star color={themes.colors.fontLight} size={20} />
    </Button>
  );
}

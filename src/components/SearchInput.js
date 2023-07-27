import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import FavFilter from "./FavFilter";
import themes from "../themes";
import { useContext } from "react";
import { GlobalStateContext } from "../store";
import { useNavigate } from "react-router-dom";
import {
    marvelComicTitlePattern,
    marvelComicUrlPattern,
    routes,
  } from "../constants";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  gap: 10px;
  align-items: center;
`;

const StyledSearchInput = styled.input`
  display: block;
  width: 100%;
  border: 0;
  outline: 0;
  color: ${themes.colors.font};
  &::placeholder {
    color: ${themes.colors.borders};
  }
`;

export default function SearchInput({ className }) {
  const { query, setQuery } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setQuery(e.target.value);

    /** Hago navigate de acuerdo a si busco un character o un comic */
    navigate({
      pathname:
        marvelComicUrlPattern.test(e.target.value) ||
        marvelComicTitlePattern.test(e.target.value)
          ? routes.SEARCH_COMIC
          : routes.SEARCH_CHARACTERS,

      search: "?q=" + encodeURIComponent(e.target.value),
    });
  };

  return (
    <Container className={className}>
      <BsSearch color={themes.colors.borders} />
      <StyledSearchInput
        value={query}
        onChange={handleSearch}
        type="search"
        placeholder="Buscar"
      />
      <FavFilter />
    </Container>
  );
}

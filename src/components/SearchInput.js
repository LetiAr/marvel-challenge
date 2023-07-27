import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import FavFilter from "./FavFilter";
import themes from "../themes";
import { useContext } from "react";
import { GlobalStateContext } from "../store";
import { useNavigate } from "react-router-dom";

const Container = styled.div`
  display: grid;
  grid-template-columns: 1rem 1fr 1rem;
  gap: 10px;
  align-items: center;
`;

const SearchInput = styled.input`
  display: block;
  width: 100%;
  border: 0;
  outline: 0;
  color: ${themes.colors.font};
  &::placeholder {
    color: ${themes.colors.borders};
  }
`;

export default function ({ className }) {
  const { query, setQuery } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const handleSearch = (e) => {
    setQuery(e.target.value);
    navigate({
      pathname: "/search",
      search: "?character=" + encodeURIComponent(e.target.value),
    });
  };

  return (
    <Container className={className}>
      <BsSearch color={themes.colors.borders} />
      <SearchInput
        value={query}
        onChange={handleSearch}
        type="search"
        placeholder="Buscar"
      />
      <FavFilter />
    </Container>
  );
}

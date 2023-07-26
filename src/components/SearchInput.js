import styled from "styled-components";
import { BsSearch } from "react-icons/bs";
import FavFilter from "./FavFilter";
import themes from "../themes";
import { useContext, useEffect, useState } from "react";
import { searchCharacters } from "../api";
import { GlobalStateContext } from "../store";
import { useNavigate, useSearchParams } from "react-router-dom";

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
  const { setSearchResult } = useContext(GlobalStateContext);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const [query, setQuery] = useState(searchParams.get("character") ?? "");

  useEffect(() => {
    const timer = setTimeout(async () => {
      if (query) {
        const result = await searchCharacters(query);
        setSearchResult(result.data.results);
        navigate({
          pathname: "/search",
          search: "?character=" + encodeURIComponent(query),
        });
      } else {
        setSearchResult([]);
      }
    }, 500);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <Container className={className}>
      <BsSearch color={themes.colors.borders} />
      <SearchInput
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        type="search"
        placeholder="Buscar"
      />
      <FavFilter />
    </Container>
  );
}

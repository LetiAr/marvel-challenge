import styled from "styled-components";
import logo from "../assets/marvel.png";
import SearchInput from "./SearchInput";
import themes from "../themes";
import { Link } from "react-router-dom";
import { routes } from "../constants";

const Container = styled.header`
  position: fixed;
  z-index: 10;
  top: 0;
  left: 0;
  right: 0;
  display: grid;
  grid-template-columns: 80px 1fr 1rem;
  grid-template-rows: auto;
  align-items: center;
  gap: 30px;
  padding: 10px;
  background-color: ${themes.colors.lightBg};
  box-shadow: 0 0 4px 0px ${themes.colors.shadows};
`;

const Logo = styled.img`
  width: 100%;
  height: auto;
`;

const StyledSearchInput = styled(SearchInput)`
  border-left: 2px solid ${themes.colors.darkBg};
  border-right: 2px solid ${themes.colors.darkBg};
  padding-left: 1rem;
  padding-right: 1rem;
`;

function SearchBar() {
  return (
    <Container>
      <Link to={routes.HOME}>
        <Logo src={logo} alt="Marvel Logo" />
      </Link>    
      <StyledSearchInput />
    </Container>
  );
}

export default SearchBar;

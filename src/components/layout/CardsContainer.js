import styled from "styled-components";

const Container = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr 1fr;
  grid-template-rows: auto;
  gap: 20px;

  @media (max-width: 780px) {
    grid-template-columns: 1fr 1fr;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
  }
`;

export const CardsContainer = ({ children }) => {
  return <Container>{children}</Container>;
};

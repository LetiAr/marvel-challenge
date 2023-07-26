import styled from "styled-components";

const Container = styled.main`
  padding: 20px;
  padding-top: 100px;
  max-width: 1200px;
  margin: 0 auto;
`;

export const MainContainer = ({ children }) => {
  return <Container>{children}</Container>;
};
import styled from "styled-components";
import themes from "../themes";
import AddToFavs from "./AddToFavs";

const Container = styled.article`
  position: relative;
  border-radius: 5px;
  overflow: hidden;
`;

const Name = styled.h1`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  margin: 0;
  padding: 25px;
  color: ${themes.colors.fontLight};
  font-size: 20px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    0deg,
    rgba(0, 0, 0, 0.7) 0%,
    rgba(0, 0, 0, 0) 100%
  );
`;

const Image = styled.img`
  display: block;
  width: 100%;
  height: auto;
`;

const AddToFavsContainer = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 100%;
  height: 100px;
  background: rgb(0, 0, 0);
  background: linear-gradient(
    225deg,
    rgba(0, 0, 0, 0.5) 0%,
    rgba(0, 0, 0, 0) 50%
  );
  background-size: 50%;
  background-position: right top;
  background-repeat: no-repeat;
  padding: 15px;
  display: flex;
  justify-content: flex-end;
`;

export default function ({ name, thumbnail }) {
  return (
    <Container>
      <AddToFavsContainer>
        <AddToFavs />
      </AddToFavsContainer>
      <Image src={`${thumbnail.path}.${thumbnail.extension}`} />
      <Name>{name}</Name>
    </Container>
  );
}

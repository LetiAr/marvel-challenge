import { useContext, useEffect, useState } from "react";
import styled from "styled-components";
import { GlobalStateContext } from "../store";
import { getCharacterComics } from "../api";
import { IoClose } from "react-icons/io5";
import themes from "../themes";

const Container = styled.div`
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  padding: 20px;
  background-color: ${themes.colors.overlay};
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ModalContainer = styled.div`
  background-color: ${themes.colors.lightBg};
  padding: 10px;
  border-radius: 5px;
  position: relative;
  width: 100%;
  max-width: 500px;
`;

const Title = styled.h1`
  font-size: 1.4rem;
`;

const Button = styled.button`
  position: absolute;
  right: 10px;
  top: 10px;
  padding: 0;
  background: none;
  border: none;
  cursor: pointer;
`;

const Image = styled.img`
  width: 80px;
  height: auto;
  float: left;
  margin-right: 10px;
`;

const ScrollableContent = styled.div`
  max-height: 500px;
  overflow: auto;
`;

const ComicLink = styled.a`
  color: inherit;
  text-decoration: none;
  display: block;
  overflow: auto;
`;

export default function () {
  const { characterModal, setCharacterModal } = useContext(GlobalStateContext);
  const [characterComics, setCharacterComics] = useState([]);

  useEffect(() => {
    (async () => {
      if (characterModal) {
        const details = await getCharacterComics(characterModal.id);
        setCharacterComics(details.data.results);
      }
    })();
  }, [characterModal]);

  if (!characterModal) return;

  return (
    <Container>
      <ModalContainer>
        <Title>{characterModal.name}</Title>
        <Button
          onClick={() => {
            setCharacterComics([]);
            setCharacterModal(null);
          }}
        >
          <IoClose size={30} color={themes.colors.font} />
        </Button>
        <ScrollableContent>
          {characterComics.map((comic) => {
            return (
              <ComicLink
                key={comic.id}
                target="_blank"
                href={comic.urls[0].url}
              >
                <article>
                  <Image
                    src={`${comic.thumbnail.path}.${comic.thumbnail.extension}`}
                  />
                  <h2>{comic.title}</h2>
                  <p>{comic.description ?? "No description"}</p>
                </article>
              </ComicLink>
            );
          })}
        </ScrollableContent>
      </ModalContainer>
    </Container>
  );
}

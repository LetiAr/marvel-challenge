import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from "../store";
import Card from "./Card";

const character = {
  name: "Leticia",
  thumbnail: {
    path: "http://example.com",
    extension: "jpg",
  },
};

test("renders without crashing", () => {
  render(
    <BrowserRouter>
      <GlobalStateProvider>
        <Card character={character} />
      </GlobalStateProvider>
    </BrowserRouter>
  );
});

test("renders a character name", () => {
  render(
    <BrowserRouter>
      <GlobalStateProvider>
        <Card character={character} />
      </GlobalStateProvider>
    </BrowserRouter>
  );

  const characterName = screen.getByText("Leticia");
  expect(characterName).toBeInTheDocument();
});

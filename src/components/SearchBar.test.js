import { render, screen } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { GlobalStateProvider } from "../store";
import SearchBar from "./SearchBar";

test("renders without crashing", () => {
  render(
    <BrowserRouter>
      <GlobalStateProvider>
        <SearchBar />
      </GlobalStateProvider>
    </BrowserRouter>
  );
});

test("renders the marvel logo with alt text", () => {
  render(
    <BrowserRouter>
      <GlobalStateProvider>
        <SearchBar />
      </GlobalStateProvider>
    </BrowserRouter>
  );
  const logoElement = screen.getByAltText("Marvel Logo");
  expect(logoElement).toBeInTheDocument();
});

import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import SearchBar from "./components/SearchBar";
import { createGlobalStyle } from "styled-components";
import themes from "./themes";
import { GlobalStateProvider } from "./store";
import { MainContainer } from "./components/layout/MainContainer";
import Home from "./views/Home";
import Search from "./views/Search";
import Favorites from "./views/Favorites";
import Modal from "./components/Modal";

const GlobalStyle = createGlobalStyle`
  body {
    color: ${themes.colors.font};
    background-color: ${themes.colors.darkBg};
    padding: 0;
    margin: 0;
    font-family: Arial, Helvetica, sans-serif;
  }
`;

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <GlobalStateProvider>
      <GlobalStyle whiteColor />
        <MainContainer>
          <SearchBar />
          <Modal />
          <Routes>
            <Route path="/" Component={Home} />
            <Route path="/search" Component={Search} />
            <Route path="/favorites" Component={Favorites} />
          </Routes>
        </MainContainer>
      </GlobalStateProvider>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
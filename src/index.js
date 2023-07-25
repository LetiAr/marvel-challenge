import React from "react";
import ReactDOM from "react-dom/client";
import reportWebVitals from "./reportWebVitals";
import { RouterProvider } from "react-router-dom";
import router from "./router";
import SearchBar from "./components/SearchBar";
import { createGlobalStyle } from "styled-components";
import themes from "./themes";
import { GlobalStateProvider } from "./store";
import { MainContainer } from "./components/layout/MainContainer";

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
    <GlobalStateProvider>
      <GlobalStyle whiteColor />
      <SearchBar />
      <MainContainer>
        <RouterProvider router={router} />
      </MainContainer>
    </GlobalStateProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.tsx";
import { createGlobalStyle } from "styled-components";
import { Provider } from "react-redux";
import { store } from "./app/store.ts";

const GlobalStyle = createGlobalStyle`
  html {
    scrollbar-gutter: stable;
  }

  body {
    font-family: Arial, sans-serif;
    max-width: 1200px;
    margin: 20px auto 0;
    scrollbar-gutter: stable;
  }

  #root {
    margin: 20px 20px 30px 20px;
  }
`;

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <GlobalStyle />
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);

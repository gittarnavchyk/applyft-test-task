import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
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

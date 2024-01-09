import React from "react";
import { ThemeProvider } from "styled-components";
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";

const App: React.FC = () => (
  <ThemeProvider theme={lightTheme}>
    <GlobalStyle />
  </ThemeProvider>
);

export { App };

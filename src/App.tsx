import React from "react";
import { ThemeProvider } from "styled-components";

// Hook import
import { useTheme } from "./hooks/useTheme";

// Style import
import { GlobalStyle } from "./styles/global";
import { lightTheme } from "./styles/themes/light";
import { darkTheme } from "./styles/themes/dark";

// Page import
import FullPage from "./pages/FullPage";

const App: React.FC = () => {
  const themeContext = useTheme();

  return (
    <ThemeProvider theme={themeContext.theme === 'light' ? lightTheme :  darkTheme}>
      <GlobalStyle />
      <FullPage />
    </ThemeProvider>
  );
};

export { App };

import React, { useContext, useState } from "react";

// import interfaces
import { ITheme, IThemeContext, ProviderProps } from "./models";

// Context
export const ThemeContext = React.createContext<IThemeContext>(
  {} as IThemeContext
);

// Provider
export const ThemeContextProvider: React.FC<ProviderProps> = ({ children }) => {
  const [theme, setTheme] = useState<ITheme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export function useTheme(): IThemeContext {
  const context = useContext(ThemeContext);

  if (!context)
    throw new Error("useTheme must be used within a themeProvider");

  return context;
}

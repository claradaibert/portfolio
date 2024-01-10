export type ITheme = "light" | "dark";

export interface IThemeContext {
  theme: ITheme;
  toggleTheme: () => void;
}

export interface ProviderProps {
  children: React.ReactNode;
}

import { PaletteMode, ThemeProvider } from "@mui/material";
import { createContext, ReactNode, useContext, useMemo, useState } from "react";
import { DarkTheme, LightTheme } from "../theme/Theme";

interface IThemeContextData {
  themeName: PaletteMode;
  toggleTheme: () => void;
}

interface IThemeContextProvider {
  children: ReactNode;
}

const ThemeContext = createContext({} as IThemeContextData);

export const useThemeContext = () => {
  return useContext(ThemeContext);
};

export const AppThemeProvider: React.FC<IThemeContextProvider> = ({
  children,
}) => {
  const [themeName, setThemeName] = useState<PaletteMode>("light");

  const toggleTheme = () => {
    themeName === "light" ? setThemeName("dark") : setThemeName("light");
  };

  const theme = useMemo(() => {
    if (themeName === "light") return LightTheme;

    return DarkTheme;
  }, [themeName]);

  return (
    <ThemeContext.Provider value={{ themeName, toggleTheme }}>
      <ThemeProvider theme={theme}>{children}</ThemeProvider>
    </ThemeContext.Provider>
  );
};

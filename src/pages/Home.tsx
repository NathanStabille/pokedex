import { Box } from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";

export const Home = () => {
  const { toggleTheme } = useThemeContext();

  return <Box>Home</Box>;
};

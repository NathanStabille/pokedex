import { Box } from "@mui/material";
import { useThemeContext } from "../contexts/ThemeContext";
import Pokeball from "../assets/pokeball.png";
import { SearchBar } from "../components/SearchBar/SearchBar";

export const Home = () => {
  const { toggleTheme } = useThemeContext();

  return (
    <Box
      height="100%"
      padding="2%"
      sx={{
        background: `url(${Pokeball}) no-repeat`,
        backgroundSize: "1000px",
        backgroundPosition: "-140% 30%",
      }}
    >
      <SearchBar/>
    </Box>
  );
};

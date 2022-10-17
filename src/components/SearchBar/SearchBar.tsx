import {
  CatchingPokemon,
  LightMode,
  NightsStay,
  Search,
} from "@mui/icons-material";
import {
  Box,
  Button,
  IconButton,
  Input,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useEffect, useState } from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { useThemeContext } from "../../contexts/ThemeContext";

export const SearchBar = () => {
  const theme = useTheme();

  const { themeName, toggleTheme } = useThemeContext();
  const { pokemons, setFilteredPokemons, getAllPokemons } = usePokemonContext();
  const [search, setsearch] = useState("");

  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  useEffect(() => {
    setFilteredPokemons(
      pokemons.filter((pokemon) => pokemon.name.includes(search))
    );
  }, [search]);

  return (
    <Box
      display="flex"
      flexDirection={mdDown ? "column" : "row"}
      justifyContent="flex-end"
      alignItems="center"
      mt={3}
    >
      <Button
        sx={{ color: "#0888ff", mr: 2 }}
        onClick={() => getAllPokemons(100000, 0)}
      >
        <CatchingPokemon sx={{ mr: 1 }} />
        Load all pokemons
      </Button>

      <Box display="flex" alignItems="center">
        <Box bgcolor={theme.palette.background.paper} borderRadius={4} mr={2}>
          <Input
            disableUnderline
            placeholder="Search Pokemon..."
            sx={{ fontSize: "1.1rem", paddingX: 1 }}
            startAdornment={<Search sx={{ color: "#CCC", mr: 1 }} />}
            onChange={(e) => setsearch(e.target.value)}
          />
        </Box>
        <IconButton
          onClick={toggleTheme}
          sx={{ color: theme.palette.text.primary }}
        >
          {themeName === "light" ? <NightsStay /> : <LightMode />}
        </IconButton>
      </Box>
    </Box>
  );
};

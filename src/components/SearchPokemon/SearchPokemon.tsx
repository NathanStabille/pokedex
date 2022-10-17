import { Search } from "@mui/icons-material";
import { Autocomplete, Box, Button, TextField, useTheme } from "@mui/material";
import { useState } from "react";
import { getPokemonById } from "../../api/pokemonAPI";
import { usePokedexContext } from "../../contexts/PokedexContext";
import { pokemonsNames } from "../../data/AutoCompleteData";
import { IPokedexData } from "../../models/PokemonData";

export const SearchPokemon = () => {
  const [inputText, setInputText] = useState<string | null>(null);

  const { setPokedexInfo } = usePokedexContext();

  const theme = useTheme();

  const getPokemon = async (input: string | null) => {
    if (input !== "" && input !== null) {
      const pok = await getPokemonById(input as string);
      setPokedexInfo(pok as IPokedexData);
      setInputText("");
    }
  };

  return (
    <Box
      display="flex"
      alignItems="center"
      width="100%"
      justifyContent="center"
    >
      <Autocomplete
        freeSolo
        value={inputText}
        disablePortal
        onChange={(event: any, newValue: string | null) => {
          setInputText(newValue);
        }}
        options={pokemonsNames}
        onKeyDown={(e) => e.key === "Enter" && getPokemon(inputText)}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search Pokemon"
            variant="standard"
            sx={{
              color: "#000",
              bgcolor: theme.palette.background.default,
              borderRadius: 2,
              paddingX: 1,
            }}
          />
        )}
      />

      <Button
        onClick={() => getPokemon(inputText)}
        variant="outlined"
        color="secondary"
        sx={{ borderRadius: 3, ml: 2 }}
        startIcon={<Search />}
      >
        Search
      </Button>
    </Box>
  );
};

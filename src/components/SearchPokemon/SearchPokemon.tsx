import { Autocomplete, Box, TextField, useTheme } from "@mui/material";
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
    <Box>
      <Autocomplete
        freeSolo
        value={inputText}
        disablePortal
        onChange={(event: any, newValue: string | null) => {
          setInputText(newValue);
        }}
        options={pokemonsNames}
        onKeyDown={(e) => e.key === "Enter" && getPokemon(inputText)}
        sx={{ width: 300}}
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
    </Box>
  );
};

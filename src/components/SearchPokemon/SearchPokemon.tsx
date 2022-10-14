import { Autocomplete, Box, Input, TextField } from "@mui/material";
import { useState } from "react";
import { pokemonsNames } from "../../data/AutoCompleteData";

export const SearchPokemon = () => {
  const [inputText, setInputText] = useState<string | null>("");

  return (
    <Box width="100%">
      <Autocomplete
        freeSolo
        value={inputText}
        disablePortal
        onChange={(event: any, newValue: string | null) => {
          setInputText(newValue);
        }}
        options={pokemonsNames}
        sx={{ width: 300 }}
        renderInput={(params) => (
          <TextField
            {...params}
            placeholder="Search for pokemon by name or id"
            variant="standard"
            sx={{
              bgcolor: "#ffffff68",
              borderRadius: 2,
              paddingX: 1,
            }}
          />
        )}
      />

      {/* <Input
        disableUnderline
        placeholder="Search for pokemon by name or id"
        value={inputText}
        onChange={(e) => setInputText(e.target.value)}
        sx={{
          bgcolor: "#ffffff68",
          borderRadius: 2,
          paddingX: 1,
          fontSize: "1.1rem",
        }}
      /> */}
    </Box>
  );
};

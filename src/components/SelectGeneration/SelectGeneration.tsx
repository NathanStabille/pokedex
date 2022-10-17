import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";

export const SelectGeneration = () => {
  const { getAllPokemons } = usePokemonContext();

  const [selectValue, setSelectValue] = useState('1');

  return (
    <Box height="100%" display="flex" alignItems="flex-end">
      <Select
        variant="standard"
        disableUnderline
        autoWidth
        value={selectValue}
        defaultValue={"1"}
        sx={{ fontSize: "1.1rem" }}
        IconComponent={KeyboardArrowDown}
        onChange={(e) => setSelectValue(e.target.value.toString())}
      >
        <MenuItem value={1} onClick={() => getAllPokemons(151, 0)}>
          1st Generation
        </MenuItem>
        <MenuItem value={2} onClick={() => getAllPokemons(100, 151)}>
          2st Generation
        </MenuItem>
        <MenuItem value={3} onClick={() => getAllPokemons(135, 251)}>
          3st Generation
        </MenuItem>
        <MenuItem value={4} onClick={() => getAllPokemons(107, 386)}>
          4st Generation
        </MenuItem>
        <MenuItem value={5} onClick={() => getAllPokemons(156, 493)}>
          5st Generation
        </MenuItem>
        <MenuItem value={6} onClick={() => getAllPokemons(72, 649)}>
          6st Generation
        </MenuItem>
        <MenuItem value={7} onClick={() => getAllPokemons(88, 721)}>
          7st Generation
        </MenuItem>
        <MenuItem value={8} onClick={() => getAllPokemons(96, 809)}>
          8st Generation
        </MenuItem>
        <MenuItem value={10} onClick={() => getAllPokemons(10000, 905)}>
          Special Pokemons
        </MenuItem>
      </Select>
    </Box>
  );
};

import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, MenuItem, Select } from "@mui/material";
import { useState } from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";

interface ISelectGenerationProps {
  search: string;
  setSearch: (search: string) => void;
}

export const SelectGeneration = ({
  search,
  setSearch,
}: ISelectGenerationProps) => {
  const { getAllPokemons } = usePokemonContext();

  const [selectValue, setSelectValue] = useState("1");

  const getGeneration = (limit: number, offset: number) => {
    setSearch("");
    getAllPokemons(limit, offset);
    setSearch(" ");
  };

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
        <MenuItem value={1} onClick={() => getGeneration(151, 0)}>
          1st Generation
        </MenuItem>
        <MenuItem value={2} onClick={() => getGeneration(100, 151)}>
          2st Generation
        </MenuItem>
        <MenuItem value={3} onClick={() => getGeneration(135, 251)}>
          3st Generation
        </MenuItem>
        <MenuItem value={4} onClick={() => getGeneration(107, 386)}>
          4st Generation
        </MenuItem>
        <MenuItem value={5} onClick={() => getGeneration(156, 493)}>
          5st Generation
        </MenuItem>
        <MenuItem value={6} onClick={() => getGeneration(72, 649)}>
          6st Generation
        </MenuItem>
        <MenuItem value={7} onClick={() => getGeneration(88, 721)}>
          7st Generation
        </MenuItem>
        <MenuItem value={8} onClick={() => getAllPokemons(96, 809)}>
          8st Generation
        </MenuItem>
        <MenuItem value={10} onClick={() => getGeneration(10000, 905)}>
          Special Pokemons
        </MenuItem>
      </Select>
    </Box>
  );
};

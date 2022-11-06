import { KeyboardArrowDown } from "@mui/icons-material";
import { Box, MenuItem, Select } from "@mui/material";
import { useEffect, useState } from "react";
import { usePokemonContext } from "../../contexts/PokemonContext";

interface ISelectGenerationProps {
  setSearch: (search: string) => void;
}

export const SelectGeneration = ({ setSearch }: ISelectGenerationProps) => {
  const { getAllPokemons } = usePokemonContext();

  const getGenerationValue = () => {
    const savedItems = localStorage.getItem("savedGeneration");

    if (!savedItems) {
      return "1";
    }

    return savedItems;
  };

  const [selectValue, setSelectValue] = useState(getGenerationValue());

  useEffect(() => {
    switch (selectValue) {
      case "1":
        getGeneration(151, 0);
        break;
      case "2":
        getGeneration(100, 151);
        break;
      case "3":
        getGeneration(135, 251);
        break;
      case "4":
        getGeneration(107, 386);
        break;
      case "5":
        getGeneration(156, 493);
        break;
      case "6":
        getGeneration(72, 649);
        break;
      case "7":
        getGeneration(88, 721);
        break;
      case "8":
        getGeneration(96, 809);
        break;
      case "10":
        getGeneration(10000, 905);
        break;
    }
  }, []);

  useEffect(() => {
    localStorage.setItem("savedGeneration", selectValue);
  }, [selectValue]);

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

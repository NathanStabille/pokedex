import { Box, MenuItem, Select } from "@mui/material";

export const SelectGeneration = () => {
  return (
    <Box height="100%" display="flex" alignItems="flex-end">
      <Select
        variant="standard"
        disableUnderline
        autoWidth
        defaultValue={1}
        sx={{ fontSize: "1.1rem" }}
      >
        <MenuItem value={1}>1st Generation</MenuItem>
        <MenuItem value={2}>2st Generation</MenuItem>
        <MenuItem value={3}>3st Generation</MenuItem>
        <MenuItem value={4}>4st Generation</MenuItem>
        <MenuItem value={5}>5st Generation</MenuItem>
        <MenuItem value={6}>6st Generation</MenuItem>
        <MenuItem value={7}>7st Generation</MenuItem>
        <MenuItem value={8}>8st Generation</MenuItem>
        <MenuItem value={9}>9st Generation</MenuItem>
        <MenuItem value={10}>Special Pokemons</MenuItem>
      </Select>
    </Box>
  );
};

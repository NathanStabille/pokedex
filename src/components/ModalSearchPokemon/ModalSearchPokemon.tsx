import { Box, Typography } from "@mui/material";
import { SearchPokemon } from "../SearchPokemon/SearchPokemon";
import Pokeball from "../../assets/pokeball-opacity.png";

export const ModalSearchPokemon = () => {
  return (
    <Box
      height="100vh"
      width="100%"
      paddingX={2}
      bgcolor="#0f0f0f"
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      color="#FFF"
      sx={{ transition: "0.3s" }}
    >
      <img
        src={Pokeball}
        alt="pokeball"
        style={{ position: "fixed", opacity: 0.3 }}
      />
      <img
        src="https://www.pngplay.com/wp-content/uploads/11/Pikachu-Pokemon-Free-PNG.png"
        alt="pikachu"
        width="100px"
      />
      <Typography fontSize="3rem" paddingBottom={3} textAlign="center">
        SEARCH A POKEMON
      </Typography>

      <SearchPokemon />
    </Box>
  );
};

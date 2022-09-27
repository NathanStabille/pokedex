import { Box } from "@mui/material";
import Pokeball from "../assets/pokeball.png";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { PokemonGallery } from "../components/PokemonGallery/PokemonGallery";

export const Home = () => {
  return (
    <Box height="100%" padding="2%">
      <img
        alt=""
        src={Pokeball}
        style={{
          height: "100vh",
          position: "fixed",
          left: -330,
          top: 0,
          zIndex: -1,
        }}
      />
      <SearchBar />

      <PokemonGallery />
    </Box>
  );
};

import { Box } from "@mui/material";
import Pokeball from "../assets/pokeball.png";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { PokemonGallery } from "../components/PokemonGallery/PokemonGallery";
import PokedexLogo from "../assets/PokedexLogo.png";

export const Home = () => {
  return (
    <Box
      height="100%"
      padding="2%"
      display="flex"
      flexDirection="column"
      alignItems="center"
    >
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
      <img src={PokedexLogo} alt="pokemon" width='350px' />
      <SearchBar />

      <PokemonGallery />
    </Box>
  );
};

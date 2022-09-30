import { Box } from "@mui/material";
import Pokeball from "../assets/pokeball.png";
import { SearchBar } from "../components/SearchBar/SearchBar";
import { PokemonGallery } from "../components/PokemonGallery/PokemonGallery";
import PokedexLogo from "../assets/PokedexLogo.png";
import { useNavigate } from "react-router-dom";

export const Home = () => {
  const navigate = useNavigate();
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
      <img
        src={PokedexLogo}
        onClick={() => navigate("/pokedex")}
        alt="pokemon"
        width="350px"
        style={{ cursor: "pointer" }}
      />
      <SearchBar />

      <PokemonGallery />
    </Box>
  );
};

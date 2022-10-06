import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, Container, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import {
  addTypeIcon,
  addZero,
  changeColor,
} from "../components/PokemonCard/PokemonCard";

const pokemon = {
  name: "squirtle",
  image:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
  shiny:
    "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
  nameJP: "ゼニガメ",
  number: 7,
  specie: "https://pokeapi.co/api/v2/pokemon-species/7/",
  height: 5,
  weight: 90,
  hp: 44,
  attack: 48,
  defense: 65,
  spAttack: 50,
  spDefense: 64,
  speed: 43,
  type: "water",
  lendary: false,
  mythical: false,
};
export const Pokedex = () => {
  const navigate = useNavigate();

  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor={changeColor(pokemon.type)}
      padding={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Container>
        <Box color="#FFF">
          <IconButton sx={{ color: "#FFF" }} onClick={() => navigate("/home")}>
            <KeyboardArrowLeft fontSize="large" />
          </IconButton>
          <Typography fontSize="1.5rem">
            {`#${addZero(pokemon.number)}${pokemon.number}`}
          </Typography>
          <Typography fontSize="3rem" sx={{ textTransform: "capitalize" }}>
            {pokemon.name}
          </Typography>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box color="#FFF" width="100%">
            <Typography fontWeight="300">
              {`Height: ${pokemon.height / 10} m`}
            </Typography>
            <Typography fontWeight="300">
              {`Weight: ${pokemon.weight / 10} kg`}
            </Typography>
          </Box>
          <Box
            color="#FFF"
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Typography
              fontSize="7vw"
              fontWeight="500"
              color="#FFF"
              sx={{
                position: "fixed",
                top: "33%",
                transform: 'translateX(-55%)' ,
                opacity: 0.5,
              }}
            >
              {pokemon.nameJP}
            </Typography>

            <img
              alt="pokemon"
              src={pokemon.image}
              style={{ marginRight: "50px" }}
            />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            paddingLeft={5}
            color={changeColor(pokemon.type)}
          >
            <img
              alt="type"
              src={addTypeIcon(pokemon.type)}
              style={{
                borderRadius: "100%",
                boxShadow: "0 2px 10px rgba(0, 0, 0, 0.281)",
              }}
              width="50px"
            />
            <Typography fontSize="2rem" color="#FFF" mb={3} mt={1}>
              Base stats:
            </Typography>
            <Box
              borderLeft="5px solid #ffffff7b"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              paddingLeft={3}
            >
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`HP ${pokemon.hp}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`ATTACK ${pokemon.attack}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`DEFENSE ${pokemon.defense}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`SP. ATTACK ${pokemon.spAttack}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`SP. DEFENSE ${pokemon.spDefense}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`SPEED ${pokemon.speed}`}</Typography>
            </Box>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

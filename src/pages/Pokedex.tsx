import { Box, Typography } from "@mui/material";
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
  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor={changeColor(pokemon.type)}
      padding={3}
    >
      <Box color="#FFF">
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
            fontSize="8rem"
            fontWeight="500"
            color="#FFF"
            sx={{ position: "absolute", top: "15%", left: "15%", opacity: 0.5 }}
          >
            {pokemon.nameJP}
          </Typography>

          <img
            alt="pokemon"
            src={pokemon.image}
            style={{ maxWidth: "450px", marginRight: "50px" }}
          />
        </Box>

        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          borderLeft="5px solid #ffffff7b"
          paddingLeft={5}
        >
          <img
            alt="type"
            src={addTypeIcon(pokemon.type)}
            style={{ borderRadius: "100%" }}
            width="50px"
          />
          <Typography fontSize="2rem" color="#FFF" mb={3}>
            Base stats:
          </Typography>
          <Typography
            mb={2}
            bgcolor="#ffffff92"
            paddingX={1.5}
            borderRadius={3}
          >{`HP ${pokemon.hp}`}</Typography>
          <Typography
            mb={2}
            bgcolor="#ffffff92"
            paddingX={1.5}
            borderRadius={3}
          >{`ATTACK ${pokemon.attack}`}</Typography>
          <Typography
            mb={2}
            bgcolor="#ffffff92"
            paddingX={1.5}
            borderRadius={3}
          >{`DEFENSE ${pokemon.defense}`}</Typography>
          <Typography
            mb={2}
            bgcolor="#ffffff92"
            paddingX={1.5}
            borderRadius={3}
          >{`SP. ATTACK ${pokemon.spAttack}`}</Typography>
          <Typography
            mb={2}
            bgcolor="#ffffff92"
            paddingX={1.5}
            borderRadius={3}
          >{`SP. DEFENSE ${pokemon.spDefense}`}</Typography>
          <Typography
            mb={2}
            bgcolor="#ffffff92"
            paddingX={1.5}
            borderRadius={3}
          >{`SPEED ${pokemon.speed}`}</Typography>
        </Box>
      </Box>
    </Box>
  );
};

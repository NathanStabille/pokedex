import { Box, Divider, Typography } from "@mui/material";
import {
  addTypeIcon,
  addZero,
  changeColor,
} from "../components/PokemonCard/PokemonCard";
import Pokeball from "../../assets/pokeball-opacity.png";
import bug from "../../assets/icons/bug.png";
import dark from "../../assets/icons/dark.png";
import dragon from "../../assets/icons/dragon.png";
import eletric from "../../assets/icons/eletric.png";
import fairy from "../../assets/icons/fairy.png";
import fighting from "../../assets/icons/fighting.png";
import fire from "../../assets/icons/fire.png";
import flying from "../../assets/icons/flying.png";
import ghost from "../../assets/icons/ghost.png";
import grass from "../../assets/icons/grass.png";
import ground from "../../assets/icons/ground.png";
import ice from "../../assets/icons/ice.png";
import normal from "../../assets/icons/normal.png";
import poison from "../../assets/icons/poison.png";
import psychic from "../../assets/icons/psychic.png";
import rock from "../../assets/icons/rock.png";
import steel from "../../assets/icons/steel.png";
import water from "../../assets/icons/water.png";

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
      width="100%"
      bgcolor={changeColor(pokemon.type)}
      padding="2%"
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
            src={pokemon.image}
            style={{ width: "450px", marginRight: "50px" }}
          />
        </Box>
        
        <Box
          display="flex"
          justifyContent="center"
          flexDirection="column"
          alignItems="flex-start"
          width="100%"
          borderLeft='5px solid #ffffff7b'
          paddingLeft={5}
        >
          <img
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

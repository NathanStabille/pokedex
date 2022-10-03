import { Box } from "@mui/material";

export const Pokedex = () => {


  const pokemon = {
    name: "squirtle",
    image: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    shiny: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/7.png",
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

  return <Box>Pokedex</Box>;
};

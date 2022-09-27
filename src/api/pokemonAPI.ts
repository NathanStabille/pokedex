import axios from "axios";

export const getAllPokemons = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return res.results;
};

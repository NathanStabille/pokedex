import axios from "axios";

export const getAllPokemons = async () => {
  await axios
    .get("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    .then((res) => res.data.results)
    .catch((err) => console.log(err));
};

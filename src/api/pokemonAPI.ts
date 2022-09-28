import axios from "axios";

interface IPokemonsData {
  name: string;
  url: string;
}

export const getPokemonsRef = async () => {
  const res = await fetch("https://pokeapi.co/api/v2/pokemon?limit=30&offset=0")
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return res.results;
};

export const getPokemonsData = async (url: string) => {
  const res = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return res;
};

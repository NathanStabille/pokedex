export const getPokemonsRef = async (number: number) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${number}&offset=0`
  )
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return res.results;
};

export const getPokemonsData = async (url: string) => {
  const res = await fetch(url)
    .then((res) => res.json())
    .catch((err) => console.log(err));

  return {
    name: res.name,
    image: res.sprites.other["official-artwork"].front_default,
    shiny: res.sprites.front_shiny,
    number: res.id,
    region: res.location_area_encounters,
    height: res.height,
    weight: res.weight,
    hp: res.stats[0].base_stat,
    attack: res.stats[1].base_stat,
    defense: res.stats[2].base_stat,
    spAttack: res.stats[3].base_stat,
    spDefense: res.stats[4].base_stat,
    speed: res.stats[5].base_stat,
    type: res.types,
  };
};

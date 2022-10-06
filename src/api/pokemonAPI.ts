export const getPokemonsRef = async (limit: number, offset: number) => {
  const res = await fetch(
    `https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`
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

export const getPokemonById = async (id: number) => {
  const res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
    .then((res) => res.json())
    .catch((err) => alert(err));

  const resSpecies = await fetch(
    `https://pokeapi.co/api/v2/pokemon-species/${id}/`
  )
    .then((res) => res.json())
    .catch((err) => alert(err));

  const varietiesURL = resSpecies.varieties;

  const filteredVarieties = varietiesURL.map(
    (item: any) => !item.is_default && item.pokemon.url
  );

  const varietiesInfo = await Promise.all(
    filteredVarieties.map((item: any) => item && getPokemonsData(item))
  );

  return {
    name: res.name,
    image: res.sprites.other["official-artwork"].front_default,
    shiny: res.sprites.front_shiny,
    number: res.id,
    nameJP: resSpecies.names[0].name,
    isLegendary: resSpecies.is_legendary,
    isMythical: resSpecies.is_mythical,
    height: res.height,
    weight: res.weight,
    hp: res.stats[0].base_stat,
    attack: res.stats[1].base_stat,
    defense: res.stats[2].base_stat,
    spAttack: res.stats[3].base_stat,
    spDefense: res.stats[4].base_stat,
    speed: res.stats[5].base_stat,
    type: res.types,
    varietiesInfo: varietiesInfo
  };
};

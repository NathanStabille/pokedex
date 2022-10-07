export interface IPokemonData {
  name: string;
  image: string;
  shiny: string;
  number: number;
  region: string;
  height: number;
  weight: number;
  hp: number;
  attack: number;
  defense: number;
  spAttack: number;
  spDefense: number;
  speed: number;
  type: [];
}

export interface IPokedexData {
  attack: number;
  defense: number;
  height: number;
  hp: number;
  image: string;
  isLegendary: boolean;
  isMythical: boolean;
  name: string;
  nameJP: string;
  number: number;
  shiny: string;
  spAttack: number;
  spDefense: number;
  speed: number;
  type: [];
  varietiesInfo: [];
  weight: number;
}

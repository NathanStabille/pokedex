import { ModalSearchPokemon } from "../components/ModalSearchPokemon/ModalSearchPokemon";
import { usePokedexContext } from "../contexts/PokedexContext";
import { Pokedex } from "./Pokedex";

export const PokedexMain = () => {
  const { pokedexInfo } = usePokedexContext();

  return <>{pokedexInfo.name ? <Pokedex /> : <ModalSearchPokemon />}</>;
};

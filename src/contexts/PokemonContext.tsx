import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getPokemonsData, getPokemonsRef } from "../api/pokemonAPI";
import { IPokemonData } from "../models/PokemonData";

interface IPokemons {
  name: string;
  url: string;
}

interface IPokemonContextData {
  pokemons: IPokemonData[];
  setPokemons: (pokemons: IPokemonData[]) => void;
  filteredPokemons: IPokemonData[];
  setFilteredPokemons: (filteredPokemons: IPokemonData[]) => void;
}

interface IPokemonProviderProps {
  children: ReactNode;
}

const PokemonContext = createContext({} as IPokemonContextData);

export const usePokemonContext = () => {
  return useContext(PokemonContext);
};

export const PokemonProvider: React.FC<IPokemonProviderProps> = ({
  children,
}) => {
  const [pokemons, setPokemons] = useState([] as IPokemonData[]);
  const [filteredPokemons, setFilteredPokemons] = useState(
    [] as IPokemonData[]
  );

  useEffect(() => {
    const getAllPokemons = async () => {
      const data = await getPokemonsRef();
      const result = data.map((pokemon: IPokemons) => pokemon.url);
      Promise.all(result.map((item: string) => getPokemonsData(item))).then(
        (res) => setPokemons(res)
      );
    };

    getAllPokemons();
  }, []);

  return (
    <PokemonContext.Provider
      value={{ filteredPokemons, setFilteredPokemons, pokemons, setPokemons }}
    >
      {children}
    </PokemonContext.Provider>
  );
};

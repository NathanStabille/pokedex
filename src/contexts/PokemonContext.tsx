import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllPokemons } from "../api/pokemonAPI";

interface IPokemonsData {
  name: string;
  url: string;
}

interface IPokemonContextData {
  pokemons: IPokemonsData[];
  setPokemons: (pokemons: IPokemonsData[]) => void;
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
  const [pokemons, setPokemons] = useState([] as IPokemonsData[]);

  useEffect(() => {
    const getPokemons = async () => {
      setPokemons(await getAllPokemons())
    };

    getPokemons();
  }, []);


  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

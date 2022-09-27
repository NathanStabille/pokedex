import {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
} from "react";
import { getAllPokemons } from "../api/pokemonAPI";

interface IPokemonContextData {
  pokemons: any;
  setPokemons: (pokemons: any) => void;
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
  const [pokemons, setPokemons] = useState({} as any);

  useEffect(() => {
    const getPokemons = async () => {
      setPokemons(await getAllPokemons());
    };

    getPokemons();
  }, []);

  console.log(pokemons)

  return (
    <PokemonContext.Provider value={{ pokemons, setPokemons }}>
      {children}
    </PokemonContext.Provider>
  );
};

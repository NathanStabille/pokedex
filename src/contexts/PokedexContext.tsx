import { createContext, ReactNode, useContext, useState } from "react";
import { IPokedexData } from "../models/PokemonData";

interface IPokedexContextData {
  pokedexInfo: IPokedexData;
  setPokedexInfo: (pokedexInfo: IPokedexData) => void;
}

interface IPokedexProviderProps {
  children: ReactNode;
}

const PokedexContext = createContext({} as IPokedexContextData);

export const usePokedexContext = () => useContext(PokedexContext)

export const PokedexProvider: React.FC<IPokedexProviderProps> = ({
  children,
}) => {


  const [pokedexInfo, setPokedexInfo] = useState({} as IPokedexData)


  return (
    <PokedexContext.Provider value={{ pokedexInfo, setPokedexInfo }}>
      {children}
    </PokedexContext.Provider>
  );
};

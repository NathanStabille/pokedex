import { Grid, Typography } from "@mui/material";
import { getPokemonById } from "../../api/pokemonAPI";
import { usePokedexContext } from "../../contexts/PokedexContext";
import { IPokedexData, IPokemonData } from "../../models/PokemonData";

interface IEvolutionChainProps {
  varieties: [];
  shiny: string;
}

export const EvolutionChain = ({ shiny, varieties }: IEvolutionChainProps) => {
  const { setPokedexInfo } = usePokedexContext();

  const switchPokemon = async (id: number) => {
    const pok = await getPokemonById(id);
    setPokedexInfo(pok as IPokedexData);
  };

  return (
    <Grid
      container
      direction="row"
      justifyContent="center"
      alignItems="center"
      overflow="scroll"
      height="400px"
    >
      {shiny && (
        <Grid
          item
          color="#FFF"
          padding={1}
          bgcolor="#ffffff3e"
          borderRadius={3}
          width="155px"
          textAlign="center"
          m={1}
        >
          <img alt="shiny" src={shiny} width="110px" />
          <Typography textAlign="center">Shiny Version</Typography>
        </Grid>
      )}

      {varieties?.map((item: IPokemonData, key) => {
        if (item && item.image) {
          return (
            <Grid
              key={key}
              item
              color="#FFF"
              bgcolor="#ffffff3e"
              borderRadius={3}
              padding={1}
              width="155px"
              m={1}
              textAlign="center"
              sx={{
                ":hover": {
                  transform: "scale(1.1)",
                  transition: "0.3s ",
                },
              }}
            >
              <img
                alt="pokemon"
                src={item.image}
                width="110px"
                onClick={() => switchPokemon(item.number)}
                style={{
                  cursor: "pointer",
                }}
              />
              <Typography textTransform="capitalize">
                {item.name.replace(/-/gi, " ")}
              </Typography>
            </Grid>
          );
        }
      })}
    </Grid>
  );
};

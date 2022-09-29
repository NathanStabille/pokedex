import { Box, Grid } from "@mui/material";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const PokemonGallery = () => {
  const { pokemons, filteredPokemons } = usePokemonContext();

  console.log(filteredPokemons);
  return (
    <Box mt={3}>
      <Grid
        container
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {filteredPokemons.length > 0
          ? filteredPokemons.map((item, key) => {
              return (
                <Grid key={key} item>
                  <PokemonCard
                    name={item.name}
                    image={item.image}
                    type={item.type}
                    number={item.number}
                  />
                </Grid>
              );
            })
          : pokemons.map((item, key) => {
              return (
                <Grid key={key} item>
                  <PokemonCard
                    name={item.name}
                    image={item.image}
                    type={item.type}
                    number={item.number}
                  />
                </Grid>
              );
            })}
      </Grid>
    </Box>
  );
};

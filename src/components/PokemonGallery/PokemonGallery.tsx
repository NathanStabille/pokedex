import { Box, Grid, Skeleton, Stack } from "@mui/material";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const PokemonGallery = () => {
  const { pokemons, filteredPokemons, loading } = usePokemonContext();

  const loadingItemsTemplate = [] as number[];

  for (let index = 0; index < 150; index++) {
    loadingItemsTemplate.push(index);
  }

  return (
    <Box mt={3}>
      <Grid
        container
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
        mb={5}
      >
        {loading &&
          loadingItemsTemplate.map((item,key) => (
            <Stack key={key} spacing={1}>
              <Skeleton variant="rounded" height={300} width={220} />
              <Skeleton variant="rounded" height={100} width={220} />
            </Stack>
          ))}

        {filteredPokemons.length > 0
          ? filteredPokemons.map((item, key) => {
              if (item.image) {
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
              }
            })
          : pokemons.map((item, key) => {
              if (item.image) {
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
              }
            })}
      </Grid>
    </Box>
  );
};

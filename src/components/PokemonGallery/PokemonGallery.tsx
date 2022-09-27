import { Box, Grid } from "@mui/material";
import { usePokemonContext } from "../../contexts/PokemonContext";
import { PokemonCard } from "../PokemonCard/PokemonCard";

export const PokemonGallery = () => {
  const { pokemons } = usePokemonContext();

  return (
    <Box padding={2} mt={3}>
      <Grid
        container
        gap={3}
        direction="row"
        justifyContent="center"
        alignItems="center"
      >
        {pokemons.map((item) => {
          return (
            <Grid item xs={2}>
              <PokemonCard />
            </Grid>
          );
        })}
      </Grid>
    </Box>
  );
};

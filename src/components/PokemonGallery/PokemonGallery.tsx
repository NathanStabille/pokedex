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
        {pokemons.map((item, key) => {
          return (
            <Grid key={key} item md={2} xs={6} >
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

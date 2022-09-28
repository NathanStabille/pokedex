import { Card, CardContent, CardMedia, Typography } from "@mui/material";
import { usePokemonContext } from "../../contexts/PokemonContext";

interface IPokemonCardProps {
  name: string;
}

export const PokemonCard = ({ name }: IPokemonCardProps) => {
  const { pokemons } = usePokemonContext();


  return (
    <Card sx={{ width: 250, borderRadius: 3 }}>
      <CardMedia component="img" image="" height="200" />

      <CardContent>
        <Typography>{name}</Typography>
      </CardContent>
    </Card>
  );
};

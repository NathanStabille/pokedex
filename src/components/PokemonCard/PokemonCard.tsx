import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface IPokemonCardProps {
  name: string;
  number: number;
  type: IPokemonTypes[];
  image: string;
}

interface IPokemonTypes {
  slot: number;
  type: { name: string; url: string };
}

export const PokemonCard = ({
  name,
  number,
  type,
  image,
}: IPokemonCardProps) => {
  return (
    <Card sx={{ width: 220, borderRadius: 3, height: 350 }}>
      <CardMedia
        component="img"
        src={image}
        height="230"
        sx={{ width: "100%", padding: 3 }}
      />

      <CardContent sx={{textTransform: 'capitalize'}}>
        <Typography>{`#${number}`}</Typography>
        <Typography>{name}</Typography>

        {type.map((item) => {
          return <Typography>{item.type.name}</Typography>;
        })}
      </CardContent>
    </Card>
  );
};

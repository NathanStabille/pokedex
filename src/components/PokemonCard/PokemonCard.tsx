import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Pokeball from "../../assets/pokeball-opacity.png";

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
    <Card
      sx={{
        width: 220,
        borderRadius: 3,
        height: 350,
        backgroundColor: "#92929222",
        backdropFilter: "blur(5px)",
        cursor: "pointer",
      }}
    >
      <CardMedia
        component="img"
        src={image}
        height="230"
        sx={{
          width: "100%",
          padding: 3,
          backgroundSize: "120px",
          backgroundPosition: "right bottom",
          backgroundPositionX: "150%",
          backgroundImage: `url(${Pokeball})`,
          filter: "contrast(150%)",
        }}
      />

      <CardContent sx={{ textTransform: "capitalize" }}>
        <Typography fontSize="1.1rem" sx={{ opacity: 0.5 }}>
          {`#${number}`}
        </Typography>
        <Typography fontSize="1.4rem" fontWeight="600">
          {name}
        </Typography>
        <Box display="flex" alignItems="center">
          {type.map((item) => {
            return (
              <Typography
                mr={5}
                paddingX={1}
                fontSize="1.1rem"
                fontWeight="500"
                bgcolor="#ffffff62"
                borderRadius={3}
              >
                {item.type.name}
              </Typography>
            );
          })}
        </Box>
      </CardContent>
    </Card>
  );
};

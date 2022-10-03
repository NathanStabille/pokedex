import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Pokeball from "../../assets/pokeball-opacity.png";
import bug from "../../assets/icons/bug.png";
import dark from "../../assets/icons/dark.png";
import dragon from "../../assets/icons/dragon.png";
import eletric from "../../assets/icons/eletric.png";
import fairy from "../../assets/icons/fairy.png";
import fighting from "../../assets/icons/fighting.png";
import fire from "../../assets/icons/fire.png";
import flying from "../../assets/icons/flying.png";
import ghost from "../../assets/icons/ghost.png";
import grass from "../../assets/icons/grass.png";
import ground from "../../assets/icons/ground.png";
import ice from "../../assets/icons/ice.png";
import normal from "../../assets/icons/normal.png";
import poison from "../../assets/icons/poison.png";
import psychic from "../../assets/icons/psychic.png";
import rock from "../../assets/icons/rock.png";
import steel from "../../assets/icons/steel.png";
import water from "../../assets/icons/water.png";

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

export const addTypeIcon = (type: string) => {
  switch (type) {
    case "bug":
      return bug;
    case "dark":
      return dark;
    case "dragon":
      return dragon;
    case "electric":
      return eletric;
    case "fairy":
      return fairy;
    case "fighting":
      return fighting;
    case "fire":
      return fire;
    case "flying":
      return flying;
    case "ghost":
      return ghost;
    case "grass":
      return grass;
    case "ground":
      return ground;
    case "ice":
      return ice;
    case "normal":
      return normal;
    case "poison":
      return poison;
    case "psychic":
      return psychic;
    case "rock":
      return rock;
    case "steel":
      return steel;
    case "water":
      return water;
  }
};

export const changeColor = (type: string) => {
  switch (type) {
    case "bug":
      return "#8fc12c";
    case "dark":
      return "#5c5464";
    case "dragon":
      return "#0a6dc4";
    case "electric":
      return "#f3d23b";
    case "fairy":
      return "#ec8fe6";
    case "fighting":
      return "#ce4069";
    case "fire":
      return "#ff9c54";
    case "flying":
      return "#8fa8dd";
    case "ghost":
      return "#5269ac";
    case "grass":
      return "#63bb5b";
    case "ground":
      return "#d97746";
    case "ice":
      return "#74cec0";
    case "normal":
      return "#9099a1";
    case "poison":
      return "#ab6ac8";
    case "psychic":
      return "#f97176";
    case "rock":
      return "#c7b78b";
    case "steel":
      return "#5a8ea1";
    case "water":
      return "#4d90d5";
  }
};

export const PokemonCard = ({
  name,
  number,
  type,
  image,
}: IPokemonCardProps) => {
  const addZero = (number: number) => {
    const idString = number.toString();
    const length = idString.length;

    switch (length) {
      case 1:
        return "00";
      case 2:
        return "0";
      default:
        return "";
    }
  };

  const pokemonTypes = type.map((item) => item.type.name.split(","));
  console.log(name);
  return (
    <Card
      sx={{
        width: 250,
        borderRadius: 3,
        height: 440,
        background: changeColor(pokemonTypes[0][0]),
        backdropFilter: "blur(5px)",
        cursor: "pointer",
        ":hover": {
          transform: 'scale(1.1)' ,
          transition: "0.3s ",
        },
      }}
    >
      <CardMedia
        component="img"
        src={image}
        height="250"
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

      <CardContent
        sx={{
          textTransform: "capitalize",
          width: "100%",
          height: 200,
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
        }}
      >
        <Box>
          <Typography fontSize="1.1rem" sx={{ opacity: 0.5 }}>
            {`#${addZero(number)}${number}`}
          </Typography>
          <Box
            width="100%"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            mb={1}
          >
            <Typography fontSize="1.4rem" fontWeight="600">
              {name.replace(/-/gi, " ")}
            </Typography>

            <Box display="flex" alignItems="center">
              {type.map((item, key) => {
                return (
                  <img
                    key={key}
                    src={addTypeIcon(item.type.name)}
                    alt=""
                    width="30px"
                    style={{ marginLeft: 5 }}
                  />
                );
              })}
            </Box>
          </Box>
        </Box>
        <Box display="flex" alignItems="center">
          {type.map((item, key) => {
            return (
              <Typography
                key={key}
                mr={3}
                paddingX={1}
                fontSize="1.1rem"
                fontWeight="500"
                bgcolor="#ffffff44"
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

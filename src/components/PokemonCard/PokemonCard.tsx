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
      return "#b9e464";
    case "dark":
      return "#71677a";
    case "dragon":
      return "#329af5";
    case "electric":
      return "#fde05c";
    case "fairy":
      return "#f8a6f3";
    case "fighting":
      return "#fa5986";
    case "fire":
      return "#fda567";
    case "flying":
      return "#abc4fa";
    case "ghost":
      return "#708ee9";
    case "grass":
      return "#7ff775";
    case "ground":
      return "#f88951";
    case "ice":
      return "#89f5e5";
    case "normal":
      return "#bbc7d1";
    case "poison":
      return "#d988ff";
    case "psychic":
      return "#fa898d";
    case "rock":
      return "#e0ce9c";
    case "steel":
      return "#7ac0da";
    case "water":
      return "#5ca2e9";
  }
};

export const addZero = (number: number) => {
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
export const PokemonCard = ({
  name,
  number,
  type,
  image,
}: IPokemonCardProps) => {
  const pokemonTypes = type.map((item) => item.type.name.split(","));
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
          transform: "scale(1.1)",
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

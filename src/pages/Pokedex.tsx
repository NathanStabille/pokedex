import { KeyboardArrowLeft } from "@mui/icons-material";
import { Box, IconButton, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EvolutionChain } from "../components/EvolutionChain/EvolutionChain";
import {
  addTypeIcon,
  addZero,
  changeColor,
} from "../components/PokemonCard/PokemonCard";
import { usePokedexContext } from "../contexts/PokedexContext";

interface IType {
  slot: number;
  type: { name: string; url: string };
}

export const Pokedex = () => {
  const navigate = useNavigate();

  const { pokedexInfo } = usePokedexContext();

  const pokemonTypes = pokedexInfo?.type.map((item: IType) =>
    item.type.name.split(",")
  );

  return (
    <Box
      height="100vh"
      width="100vw"
      bgcolor={changeColor(pokemonTypes[0][0])}
      padding={3}
      display="flex"
      justifyContent="center"
      alignItems="center"
      overflow="hidden"
      sx={{ transition: "0.3s" }}
    >
      <Box width="100%" height="100%">
        <Box color="#FFF">
          <Box display="flex" alignItems="center">
            <IconButton
              sx={{ color: "#FFF" }}
              onClick={() => navigate("/home")}
            >
              <KeyboardArrowLeft fontSize="large" />
            </IconButton>
            <Typography fontSize="1.5rem">
              {`#${addZero(pokedexInfo.number)}${pokedexInfo.number}`}
            </Typography>
          </Box>
          <Box
            color="#FFF"
            display="flex"
            justifyContent="space-between"
            alignItems="center"
            width="100%"
            paddingX={5}
          >
            <Typography fontSize="2.5rem" sx={{ textTransform: "capitalize" }}>
              {pokedexInfo.name.replace(/-/gi, " ")}
            </Typography>
            <Box>
              <Typography fontWeight="300">
                {`Height: ${pokedexInfo.height / 10} m`}
              </Typography>
              <Typography fontWeight="300">
                {`Weight: ${pokedexInfo.weight / 10} kg`}
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="100%"
        >
          <Box
            color="#FFF"
            display="flex"
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="100%"
          >
            <Typography
              fontSize="7vw"
              fontWeight="500"
              color="#FFF"
              sx={{
                position: "fixed",
                top: "30%",
                opacity: 0.5,
              }}
            >
              {pokedexInfo.nameJP}
            </Typography>

            <Box
              width="100%"
              display="flex"
              justifyContent="center"
              alignItems="center"
            >
              <img
                alt="pokemon"
                src={pokedexInfo.image}
                style={{ marginRight: "50px", marginLeft: "70px" }}
              />
            </Box>
          </Box>

          <Box width="100%" color="#FFF" textAlign="center">
            <Typography fontSize="1.3rem">Variations</Typography>
            <EvolutionChain
              shiny={pokedexInfo.shiny}
              varieties={pokedexInfo.varietiesInfo}
            />
          </Box>

          <Box
            display="flex"
            justifyContent="center"
            flexDirection="column"
            alignItems="flex-start"
            width="100%"
            paddingLeft={5}
            color={changeColor(pokemonTypes[0][0])}
          >
            <Box>
              {pokedexInfo.type.map((item: IType, key) => {
                return (
                  <img
                    key={key}
                    alt="type"
                    src={addTypeIcon(item.type.name)}
                    style={{
                      borderRadius: "100%",
                      boxShadow: "0 2px 10px rgba(0, 0, 0, 0.281)",
                      marginRight: 10,
                    }}
                    width="50px"
                  />
                );
              })}
            </Box>

            <Typography fontSize="2rem" color="#FFF" mb={3} mt={1}>
              Base stats:
            </Typography>
            <Box
              width="100%"
              borderLeft="5px solid #ffffff7b"
              display="flex"
              flexDirection="column"
              alignItems="flex-start"
              paddingLeft={3}
            >
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`HP ${pokedexInfo.hp}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`ATTACK ${pokedexInfo.attack}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`DEFENSE ${pokedexInfo.defense}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`SP. ATTACK ${pokedexInfo.spAttack}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`SP. DEFENSE ${pokedexInfo.spDefense}`}</Typography>
              <Typography
                mb={2}
                bgcolor="#ffffff"
                paddingX={1.5}
                borderRadius={3}
              >{`SPEED ${pokedexInfo.speed}`}</Typography>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

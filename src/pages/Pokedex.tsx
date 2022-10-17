import { KeyboardArrowLeft } from "@mui/icons-material";
import {
  Box,
  IconButton,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import { useNavigate } from "react-router-dom";
import { EvolutionChain } from "../components/EvolutionChain/EvolutionChain";
import {
  addTypeIcon,
  addZero,
  changeColor,
} from "../components/PokemonCard/PokemonCard";
import { SearchPokemon } from "../components/SearchPokemon/SearchPokemon";
import { usePokedexContext } from "../contexts/PokedexContext";
import { motion } from "framer-motion";
import { usePokemonContext } from "../contexts/PokemonContext";

interface IType {
  slot: number;
  type: { name: string; url: string };
}

export const Pokedex = () => {
  const navigate = useNavigate();

  const theme = useTheme();
  const mdDown = useMediaQuery(theme.breakpoints.down("md"));

  const { getAllPokemons } = usePokemonContext();
  const { pokedexInfo } = usePokedexContext();

  const pokemonTypes = pokedexInfo.type.map((item: IType) =>
    item.type.name.split(",")
  );

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
    >
      <Box
        height={mdDown ? "100%" : "100vh"}
        width="100vw"
        bgcolor={changeColor(pokemonTypes[0][0])}
        padding={3}
        display="flex"
        justifyContent="center"
        flexDirection="column"
        overflow={mdDown ? "auto" : "hidden"}
        sx={{ transition: "0.3s" }}
      >
        <Box
          width="100%"
          height="100%"
          display="flex"
          flexDirection="column"
          justifyContent="center"
          alignItems="center"
          mb={mdDown ? 3 : 0}
        >
          <Box color="#FFF" width="100%">
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
              flexDirection={mdDown ? "column" : "row"}
              justifyContent="space-between"
              alignItems="center"
              paddingX={5}
              mb={mdDown ? 5 : 0}
            >
              <Typography
                fontSize="3rem"
                textAlign="center"
                sx={{ textTransform: "capitalize" }}
              >
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
            flexDirection={mdDown ? "column" : "row"}
            justifyContent="space-around"
            alignItems="center"
            height="100%"
            width="100%"
          >
            <Box
              color="#FFF"
              display="flex"
              flexDirection="column"
              justifyContent="center"
              alignItems="center"
            >
              <Typography
                fontSize={mdDown ? "20vw" : "6.5vw"}
                fontWeight="500"
                color="#FFF"
                sx={{
                  position: "absolute",
                  top: mdDown ? "30%" : "30%",
                  opacity: 0.5,
                  wordWrap: "normal",
                }}
              >
                {pokedexInfo.nameJP}
              </Typography>

              <Box
                display="flex"
                justifyContent="center"
                alignItems="center"
                mb={mdDown ? 5 : 0}
              >
                <img
                  alt="pokemon"
                  src={pokedexInfo.image}
                  width={mdDown ? "300px" : ""}
                  style={{ marginRight: "70px", marginLeft: "70px" }}
                />
              </Box>
            </Box>

            <Box color="#FFF" textAlign="center">
              <Typography fontSize="1.3rem">Variations</Typography>
              <EvolutionChain
                shiny={pokedexInfo.shiny}
                varieties={pokedexInfo.varietiesInfo}
              />
            </Box>

            <Box
              width={mdDown ? "100%" : "300px"}
              display="flex"
              justifyContent="center"
              flexDirection="column"
              alignItems={mdDown ? "center" : "flex-start"}
              paddingLeft={mdDown ? 0 : 5}
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
                minWidth={mdDown ? "100%" : "300px"}
                borderLeft={mdDown ? "" : "5px solid #ffffff7b"}
                display="flex"
                flexDirection="column"
                alignItems={mdDown ? "center" : "flex-start"}
                paddingLeft={mdDown ? 0 : 3}
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
        <SearchPokemon />
      </Box>
    </motion.div>
  );
};

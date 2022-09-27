import { LightMode, NightsStay, Search } from "@mui/icons-material";
import { Box, IconButton, Input, useTheme } from "@mui/material";
import { useThemeContext } from "../../contexts/ThemeContext";

export const SearchBar = () => {
  const theme = useTheme();

  const { themeName, toggleTheme } = useThemeContext();

  return (
    <Box display="flex" justifyContent="flex-end" alignItems="center">
      <Box bgcolor={theme.palette.background.paper} borderRadius={4} mr={2}>
        <Input
          disableUnderline
          placeholder="Search Pokemon..."
          sx={{ fontSize: "1.1rem", paddingX: 1 }}
          startAdornment={<Search sx={{ color: "#CCC", mr: 1 }} />}
        />
      </Box>
      <IconButton
        onClick={toggleTheme}
        sx={{ color: theme.palette.text.primary }}
      >
        {themeName === "light" ? <NightsStay /> : <LightMode />}
      </IconButton>
    </Box>
  );
};

import { Box } from "@mui/material";
import { AppRoutes } from "./routes";

export const App = () => {

  return (
    <Box height="100vh" sx={{ userSelect: "none" }}>
      <AppRoutes />
    </Box>
  );
};

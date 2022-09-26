import { Button } from "@mui/material";
import { Navigate, Route, Routes } from "react-router-dom";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Button>button</Button>}/>
      <Route path="/pokedex" element={<>Pokex</>} />
      <Route path="*" element={<Navigate to="/home" />}></Route>
    </Routes>
  );
};

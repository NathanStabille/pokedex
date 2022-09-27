import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { Pokedex } from "../pages/Pokedex";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/pokedex" element={<Pokedex />} />
      <Route path="*" element={<Navigate to="/home" />}></Route>
    </Routes>
  );
};

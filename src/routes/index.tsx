import { Navigate, Route, Routes } from "react-router-dom";
import { Home } from "../pages/Home";
import { PokedexMain } from "../pages/PokedexMain";
import { AnimatePresence } from "framer-motion";

export const AppRoutes = () => {
  return (
    <AnimatePresence>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/pokedex" element={<PokedexMain />} />
        <Route path="*" element={<Navigate to="/home" />} />
      </Routes>
    </AnimatePresence>
  );
};

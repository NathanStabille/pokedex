import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { PokedexProvider } from "./contexts/PokedexContext";
import { PokemonProvider } from "./contexts/PokemonContext";
import { AppThemeProvider } from "./contexts/ThemeContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <AppThemeProvider>
      <CssBaseline />
      <BrowserRouter>
        <PokemonProvider>
          <PokedexProvider>
            <App />
          </PokedexProvider>
        </PokemonProvider>
      </BrowserRouter>
    </AppThemeProvider>
  </React.StrictMode>
);

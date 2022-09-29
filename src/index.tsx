import { CssBaseline } from "@mui/material";
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
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
          <App />
        </PokemonProvider>
      </BrowserRouter>
    </AppThemeProvider>
  </React.StrictMode>
);

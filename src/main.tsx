import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Home from "./routes/Home/index.tsx";
import PokeDetails from "./routes/PokeDetails/index.tsx";
// import OnePokemon from "./routes/OnePokemon/OnePokemon.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />
  },
  {
    path: "/pokemon/:pokemonName",
    element: <PokeDetails />
  }
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);

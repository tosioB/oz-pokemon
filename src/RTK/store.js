import { configureStore } from "@reduxjs/toolkit";
import { pokemonSlice } from "./slice";

export const store = configureStore({
  reducer: {
    pokemon: pokemonSlice.reducer
  }
})
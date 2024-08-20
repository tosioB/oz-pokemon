import { configureStore } from "@reduxjs/toolkit";
import { favoriteSlice, pokemonSlice } from "./slice";

export const store = configureStore({
  reducer: { // slice에서 만든 createSlice를 사용하기 위해 store에 추가
    pokemon: pokemonSlice.reducer,
    favorite: favoriteSlice.reducer
  }
})
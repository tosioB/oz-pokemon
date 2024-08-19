import { createSelector } from "@reduxjs/toolkit";
// 포켓몬 데이터중 일부를 가져오기 위해 만들어진 페이지
// useSelector로 상태를 불러올 때 사용하기 위해 만들어진 페이지
// 모든 데이터를 불러올 필요가 없는 Detail페이지를 위해 만들어진 페이지

export const selectPokemonById = (pokemonId) => createSelector(
  state => state.pokemon.data,
  (pokemon) => {
    return pokemon.find(e => e.id === pokemonId)
  }
)
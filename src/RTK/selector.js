import { createSelector } from "@reduxjs/toolkit";

export const selectPokemonById = (pokemonId) => createSelector(
  // 포켓몬 데이터중 일부를 가져오기 위해 만들어진 셀렉터
  // useSelector로 상태를 불러올 때 사용하기 위해 만들어진 셀렉터
  // 모든 데이터를 불러올 필요가 없는 Detail페이지를 위해 만들어진 셀렉터
  state => state.pokemon.data,
  (pokemon) => {
    return pokemon.find(e => e.id === pokemonId)
  }
)

export const selectPokemonByRegExp = (reg) => createSelector(
  // 정규식을 입력받아서 정규식과 일치하는 포켓몬 데이터를 불러오는 셀렉터
  state => state.pokemon.data,
  (pokemon) => pokemon.filter(el => el.name.match(reg))
)

export const selectFavoritePokemons = createSelector(
  // 첫 번째 입력 셀렉터: 상태에서 `pokemon.data`를 추출
  state => state.pokemon.data, // 스토어에서 가져온 데이터 pokemon을 추출
  
  // 두 번째 입력 셀렉터: 상태에서 `favorite`을 추출
  state => state.favorite, // 스토어에서 가져온 데이터 favorite을 추출

  // 결과 함수: 위의 두 입력 셀렉터에서 반환된 값을 사용하여 최종 결과를 계산
  (pokemon, favorite) => {
    // `pokemon` 배열에서 `favorite` 배열에 포함된 `id`를 가진 포켓몬만 필터링하여 반환
    return pokemon.filter(e => favorite.includes(e.id))
  }
)

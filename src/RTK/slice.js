import { createSlice } from "@reduxjs/toolkit";
import { fetchMultiplePokemonById } from "./thunk";

export const pokemonSlice = createSlice({ // 객체 형태로 어떤 상태를 만들고자 하는지
  name: 'pokemon', // 포켓몬 상태를 담는다.
  initialState: { // 첫번째 상태
    data: [], // 포켓몬의 데이터를 담아줄 배열
    loading: true, // 처음에 데이터를 불러와야 하니까 loading의 값은 true
  },
  reducers: {}, // reducers는 동기적으로 상태를 변경할 때 사용
  extraReducers: (builder) => { // extraReducers는 비동기적으로 상태를 변경할 때 사용
    builder
      .addCase(fetchMultiplePokemonById.pending, (state) => { // 처리중일때
        state.loading = true;
      })
      .addCase(fetchMultiplePokemonById.rejected, (state) => { // 불러오기 실패
        state.loading = false;
      })
      .addCase(fetchMultiplePokemonById.fulfilled, (state, action) => { // 불러오기 성공
        state.loading = false;
        state.data = action.payload
      })
  } 
})
/** 
 * slice가 만들어졌다는 것은
 * action과 reducer가 만들어졌다.
 * 
 * reducer가 만들어졌다는 것은
 * reducer를 전달해서 store를 생성할 수 있다.
*/
import { createAsyncThunk } from "@reduxjs/toolkit";

export const fetchMultiplePokemonById = createAsyncThunk(
  'pokemon/fetchMultiplePokemonById', // thunk 이름
  async (maxPokemonId) => {
    const numberArray = Array.from({length: maxPokemonId}, (_, index) => index + 1); // 1~151

    const fetchAPI = async (pokemonId) => {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${pokemonId}`);
      const data = await response.json();

      const pokemonData = {
        id: pokemonId,
        name: data.names.find(e => e.language.name === 'ko').name,
        desc: data.flavor_text_entries.find(e => e.language.name === 'ko').flavor_text,
        front: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`,
        back: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/back/${pokemonId}.png`
      }
      return pokemonData;
    }

    return await Promise.all(numberArray.map((e) => fetchAPI(e)));
  }
)
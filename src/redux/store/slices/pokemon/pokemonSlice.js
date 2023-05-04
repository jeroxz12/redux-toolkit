import { createSlice } from '@reduxjs/toolkit';
export const pokemonSlice = createSlice({
   name: 'pokemon',
   initialState: {
       page: 0,
       pokemons: [],
       isLoading: false
   },
    reducers: {
      startLoadingPokemons: (state) => {
        state.isLoading = true // "mutando" state pero RTK se encarga de que no  lo haga 
        // return {
        //     ...state,
        //     isLoading:true No mutando state
        // }
      }, setPokemons: (state, action) => {
        state.isLoading = false;
        state.page = action.payload.page;
        state.pokemons = action.payload.pokemons
        console.log(action);
      }
    }
});
export const { startLoadingPokemons, setPokemons } = pokemonSlice.actions;
import axios from "axios";
import { setPokemons, startLoadingPokemons } from "./pokemonSlice";
import { pokemonApi } from "../../../../api/pokemonApi";

// El parametro pagina es opcional, porque si no lo paso es = 0
export const getPokemons = ( page = 0) => {
    return async( dispatch, getState ) => {
        dispatch( startLoadingPokemons() );

        //  Call API
        // axios.get(`https://pokeapi.co/api/v2/pokemon?limit=10&offset=${page * 10}`)
        //     .then((res) => setPokemons( { pokemons: res.results, page: page + 1}));
        const { data } = await pokemonApi.get(`/pokemon?limit=10&offset=${page * 10}`)
        dispatch( setPokemons({ pokemons: data.results, page: page + 1}));
    }
}
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getPokemons } from './redux/store/slices/pokemon/thunks';

const PokemonApp = () => {

  const dispatch = useDispatch();
  const {pokemons = [], isLoading, page} = useSelector(state => state.pokemons);
useEffect( ()=>{
  dispatch( getPokemons() );
},[]);

  return (
   <>
   <h1>PokemonApp</h1>
   <hr />
   <p>Loading: {isLoading ? 'True' : 'False'}</p>
    <ul>
      {!isLoading && pokemons.map( (pokemon,id) => {
        return <li key={id}>{pokemon.name}</li>
      })}
    </ul>
    <button onClick={ () => {
      dispatch(getPokemons(page+1))
    }}>Next Page</button>
   </>
  )
}

export default PokemonApp
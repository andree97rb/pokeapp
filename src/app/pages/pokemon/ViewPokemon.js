import React from 'react';
import useFetch from 'app/hooks/useFetch';
import PokemonList from 'app/components/pokemon/PokemonList';

const ViewCategory = () => {
    const { data: listadoPokemon } = useFetch('/pokemon');
    return (
        <PokemonList listadoPokemon={listadoPokemon}/>

    );
}

export default ViewCategory;
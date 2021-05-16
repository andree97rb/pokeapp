import React from 'react';
import PokemonCard from './PokemonCard';
import { Link } from 'react-router-dom'


const PokemonList = ({ listadoPokemon }) => {

    const pokedex = () => {
        return (
            listadoPokemon.map((pokemon) => (
                <PokemonCard key={pokemon.id} pokemon={pokemon}/>
            ))
        );

        return null;
    }
    return (
        <div className="container mt-5">
            <div className="mb-3">
                <Link to="/addPokemon" className="btn btn-primary">
                    Agregar
                </Link>
            </div>

            <div className="d-flex justify-content-between flex-wrap">
                {pokedex()}
            </div>
        </div>
    );
}

export default PokemonList;
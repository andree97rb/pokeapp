import React from 'react';

const PokemonCard = ({pokemon}) => {

    return (
        <>            
            <div className="card mb-5" style={{ width: "17rem", fontSize:"14px" }}>
                <div className="bg-success d-flex align-items-center text-light pl-3">{ pokemon.id}. <h5 className="card-title pt-3 p-2">{pokemon.nombre}</h5></div>                
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <img src={pokemon.imagen} alt="pokemon" className="card-img-top" style={{ width: "150px" }} />
                </div>
                <div className="card-body">
                    <div><strong>Tipo: </strong>{pokemon.tipo}</div>
                    <div><strong>Ataque: </strong>{pokemon.ataque}</div>
                    <div className="d-flex"><div><strong>Alt: </strong>{pokemon.altura} metros</div><div className="pl-2"><strong>P: </strong>{pokemon.peso} kg</div></div>
                    <div><strong>Generación: </strong> {pokemon.generacion} </div>
                    <h5 className="card-title">Descripción</h5>
                    <p className="card-text">{pokemon.descripcion}</p>
                    <a href="w" className="btn btn-secondary">Editar</a>
                </div>
            </div>
        </>
    );
}

export default PokemonCard;
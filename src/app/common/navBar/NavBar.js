import React from 'react';
import { NavLink }  from 'react-router-dom';
const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <img src="https://imagenpng.com/wp-content/uploads/2016/09/Pokebola-pokeball-png-2.png" alt="pokeball" width="35" style={{ marginRight: "10px" }}></img>
                    <div className="navbar-brand ">Pokeapp</div>
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <NavLink to="/PokemonList" className="text-light mr-3">
                                   Pokemon
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/tipoList" className="text-light mr-3">
                                   Tipo
                                </NavLink>
                            </li>
                            <li className="nav-item">
                                <NavLink to="/ataqueList" className="text-light mr-3">
                                   Ataque
                                </NavLink>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </>
    );
}

export default NavBar;
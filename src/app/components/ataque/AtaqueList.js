import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaPlus, FaEdit } from 'react-icons/fa';

const AtaqueList = ({ listadoAtaque }) => {
    const thead = () => {
        return (
            <tr>
                <th>Número</th>
                <th>Nombre</th>
                <th>Editar</th>
            </tr>
        );
    }

    const itemList = () => {
        return (
            listadoAtaque.map((ataque) => (
                <tr key={ataque.id}>
                    <th >{ataque.id}</th>
                    <td>{ataque.nombre}</td>
                    <td>
                        <Link to={"/editAtaque/" + ataque.id}>
                            <FaEdit />
                        </Link>
                    </td>
                </tr>
            ))
        );
        return null;
    }

    return (
        <>
            <div className="container mt-5">    
                <div className="pb-3"><h3>Lista de ataque de pokemon: </h3></div>
                <div>
                    <Link to="/addAtaque" className="btn btn-primary">
                        <FaPlus />Agregar
                    </Link>
                    <Table responsive>
                        <thead>
                            {thead()}
                        </thead>
                        <tbody>
                            {itemList()}
                        </tbody>
                    </Table>
                </div>
            </div>
        </>
    );
}

export default AtaqueList;
import React from 'react';
import { Table } from 'react-bootstrap';
import { Link } from 'react-router-dom'
import { FaPlus, FaEdit } from 'react-icons/fa';

const TipoList = ({ listadoTipo }) => {
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
            listadoTipo.map((tipo) => (
                <tr key={tipo.id}>
                    <th >{tipo.id}</th>
                    <td>{tipo.nombre}</td>
                    <td>
                        <Link to={"/editTipo/" + tipo.id}>
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
                <div className="pb-3"><h3>Lista de tipos de pokemon: </h3></div>
                <div>
                    <Link to="/addTipo" className="btn btn-primary">
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

export default TipoList;
import React, { useState, useEffect } from 'react';
import EditTipoForm from 'app/components/tipo/EditTipoForm';
import { useHistory, useParams } from 'react-router-dom';
import { get, update } from 'services/api';

const EditTipo = () => {

    const [tipos, setTipo] = useState({
        nombre: ''
    });

    const [error, setError] = useState(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const fetchTipo = async () => {
            try {
                const data = await get('/tipo', id);
                setTipo({
                    nombre: data.nombre
                });
            } catch (error) {
                setError(error.message);
            }
        }
        fetchTipo();
    }, [id])

    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setTipo({
            ...tipos,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await update('/tipo', id, tipos);
            history.push('/tipoList');

        } catch (error) {
            setError(error.message);
        }
    }

    return (
        <>  { error &&
            <div
                message={error}
            />
        }
            <EditTipoForm
                tipos={tipos}
                onChange={handleChange}
                onSubmit={handleSubmit}

            />
        </>
    );
}

export default EditTipo;
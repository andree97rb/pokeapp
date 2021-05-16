import React, { useState } from 'react';
import AddTipoForm from 'app/components/tipo/AddTipoForm';
import { useHistory } from 'react-router-dom';
import { create } from 'services/api';

const AddTipo = () => {

    const [tipos, setTipo] = useState({
        nombre: ''
    });

    const [error, setError] = useState(null);
    const history = useHistory();


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
            await create('/tipo', tipos);
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
            <AddTipoForm
                tipos={tipos}
                onChange={handleChange}
                onSubmit={handleSubmit}

            />
        </>
    );
}

export default AddTipo;
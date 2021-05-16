import React, { useState } from 'react';
import AddAtaqueForm from 'app/components/ataque/AddAtaqueForm';
import { useHistory } from 'react-router-dom';
import { create } from 'services/api';

const AddAtaque = () => {

    const [ataques, setAtaque] = useState({
        nombre: ''
    });

    const [error, setError] = useState(null);
    const history = useHistory();


    const handleChange = (event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
        setAtaque({
            ...ataques,
            [name]: value
        });
    }

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            await create('/ataque', ataques);
            history.push('/ataqueList');

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
            <AddAtaqueForm
                ataques={ataques}
                onChange={handleChange}
                onSubmit={handleSubmit}

            />
        </>
    );
}

export default AddAtaque;
import React, { useState, useEffect } from 'react';
import EditAtaqueForm from 'app/components/ataque/EditAtaqueForm';
import { useHistory, useParams } from 'react-router-dom';
import { get, update } from 'services/api';

const EditAtaque = () => {

    const [ataques, setAtaque] = useState({
        nombre: ''
    });

    const [error, setError] = useState(null);
    const history = useHistory();
    const { id } = useParams();

    useEffect(() => {
        const fetchAtaque = async () => {
            try {
                const data = await get('/ataque', id);
                setAtaque({
                    nombre: data.nombre
                });
            } catch (error) {
                setError(error.message);
            }
        }
        fetchAtaque();
    }, [id])

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
            await update('/ataque', id, ataques);
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
            <EditAtaqueForm
                ataques={ataques}
                onChange={handleChange}
                onSubmit={handleSubmit}

            />
        </>
    );
}

export default EditAtaque;
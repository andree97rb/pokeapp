import React from 'react';
import useFetch from 'app/hooks/useFetch';
import TipoList from 'app/components/tipo/TipoList';

const ViewTipo = () => {
    const { data: listadoTipo } = useFetch('/tipo');

    return (
        <>
            <TipoList
                listadoTipo={listadoTipo}
            />
        </>
    );
}

export default ViewTipo;
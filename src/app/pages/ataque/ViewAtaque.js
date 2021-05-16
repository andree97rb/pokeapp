import React from 'react';
import useFetch from 'app/hooks/useFetch';
import AtaqueList from 'app/components/ataque/AtaqueList';

const ViewAtaque = () => {
    const { data: listadoAtaque } = useFetch('/ataque');
    console.log(listadoAtaque);

    return (
        <>  
            <AtaqueList
                listadoAtaque={listadoAtaque}
            />
        </>
    );
}

export default ViewAtaque;
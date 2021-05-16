import React from 'react';
import { Form, Button } from 'react-bootstrap';

const EditTipoForm = ({
    tipos,
    onChange,
    onSubmit
}) => {
    return (
        <div className="container mt-5 mb-5">
            <div className="mb-4"><h3>Editar Tipo</h3></div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="100"
                                name="nombre"
                                placeholder="Ingrese nombre del tipo de pokemon"
                                value={tipos.nombre}
                                onChange={onChange}
                                required
                            />
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar
            </Button>
            </Form>
        </div>
    );
}

export default EditTipoForm;
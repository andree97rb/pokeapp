import React from 'react';
import { Form, Button } from 'react-bootstrap';
 

const AddAtaqueForm = ({
    ataques,
    onChange,
    onSubmit
}) => {
    return (
        <div className="container mt-5 mb-5">
            <div className="mb-4"><h3>Registrar Ataque</h3></div>
            <Form onSubmit={onSubmit}>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Tipo: </Form.Label>
                    <Form.Control 
                                size="sm"
                                type="text"
                                maxLength="100"
                                name="nombre"
                                placeholder="Ingrese nombre del ataque de pokemon"
                                value={ataques.nombre}
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
 
export default AddAtaqueForm;
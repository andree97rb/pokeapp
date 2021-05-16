import React from 'react';
import { Form, Button } from 'react-bootstrap';

const AddPokemonForm = () => {
    return (
        <div className="container mt-5 mb-5">
            <div className="mb-4"><h3>Registrar Pokemon</h3></div>
            <Form>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Nombre: </Form.Label>
                    <Form.Control type="email" placeholder="Ingrese nombre del pokemon" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Descripción: </Form.Label>
                    <Form.Control type="email" placeholder="Ingrese descripción del pokemon" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Peso: </Form.Label>
                    <Form.Control type="email" placeholder="Ingrese peso del pokemon" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Altura: </Form.Label>
                    <Form.Control type="email" placeholder="Ingrese altura del pokemon" />
                </Form.Group>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Generación: </Form.Label>
                    <Form.Control type="number" placeholder="ingrese generacón del pokemon 1-8" min="1" max="8" />
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Tipo</Form.Label>
                    <Form.Control as="select">
                        <option>Piedra</option>
                        <option>Volador</option>
                        <option>Fuego</option>
                    </Form.Control>
                </Form.Group>
                <Form.Group controlId="exampleForm.ControlSelect1">
                    <Form.Label>Ataque: </Form.Label>
                    <Form.Control as="select">
                        <option>Lanzallamas</option>
                        <option>Llamarada</option>
                        <option>Puño fuego</option>
                    </Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit">
                    Registrar
            </Button>
            </Form>
        </div>
    );
}

export default AddPokemonForm;
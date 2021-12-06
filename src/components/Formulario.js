import React, { useEffect, useState } from 'react'
import { Form } from 'react-bootstrap'
import {Button} from 'react-bootstrap'
const Formulario = () => {
    const [datos, setDatos] = useState({
        nombre:'',
        correo:''
    })
    useEffect(() => {
        console.log('componentDidMount');
        return () => {
            console.log('componentDidUnmount');
        }
    }, [datos])
    const handleSubmit = (e) => {
        e.preventeDefault();
    }
    //... operador rest o spread, recorre el resto de la lista de arg de un array
    const handleChange = ({target}) => {
        setDatos({
            ...datos,
            [target.name]: target.value
        })
    }
    return (
        <div>
        <h1>Formulario</h1>
        <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3">
            <Form.Label>Nombre</Form.Label>
            <Form.Control type="text" placeholder="Ingrese su nombre" name="nombre" value={datos.nombre} onChange={handleChange} />
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            <Form.Group className="mb-3" >
            <Form.Label>Correo</Form.Label>
            <Form.Control type="email" placeholder="Ingrese su correo" name='correo' value={datos.correo} onChange={handleChange}/>
            <Form.Text className="text-muted">
            We'll never share your email with anyone else.
            </Form.Text>
            </Form.Group>
            <Button variant="danger">Sumar</Button>
        </Form>
        </div>
    )
}
export default Formulario
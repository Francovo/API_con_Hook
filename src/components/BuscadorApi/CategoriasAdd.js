import React, {useEffect, useRef, useState} from 'react';
import { Form } from 'react-bootstrap';

const CategoriasAdd = ({setCategorias}) => {

    const [search, setSearch] = useState('')
    const searchRef = useRef()

    useEffect(() => {
        searchRef.current.focus()
    }, [])

    const handleSubmit = (e) => {
        e.preventDefault()
        setCategorias(categorias => [search, ...categorias])
        setSearch('')
    }

    const handleonChange = (e) => {
        setSearch(e.target.value)
    }

    

    return (
        <div>
            <Form onSubmit={handleSubmit}>
                <Form.Group>
                    <Form.Control
                    type="text"
                    ref={searchRef}
                    name="categoria"
                    placeholder="Busca una categoria"
                    value={search}
                    onChange={handleonChange}/>
                </Form.Group>
            </Form>
            
        </div>
    )
}

export default CategoriasAdd
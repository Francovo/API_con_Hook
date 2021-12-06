import React, { useState } from 'react';
// import { Button } from 'react-bootstrap';
import CategoriasAdd from './CategoriasAdd';
import CategoriasList from './CategoriasList';

const CategoriasApp = () => {

    const [categorias, setCategorias] = useState([])

    /// el operador sprit en este caso sirve para agregar al estado dentro del array (...)
    // const handleAgregar = () => {
    //     setCategorias([...categorias, 'Risas'])
    // }

    return (
        <div>
            <h1>Encuentra tu gif</h1>
                <CategoriasAdd setCategorias={setCategorias}/>
                <CategoriasList categoria={categorias}/>

            {/* <Button variant="primary" onClick={handleAgregar}>Buscar</Button> */}
        </div>
    )
}

export default CategoriasApp
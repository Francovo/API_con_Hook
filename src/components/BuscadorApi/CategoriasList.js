import React from 'react';
import Cards from './Cards';

const CategoriasList = ({categoria}) => {
    return (
        <div>
            {
                categoria.map((cate, index) => (
                    <Cards categoria={cate} key={index} />
                    ))
                }
        </div>
    )
}

export default CategoriasList
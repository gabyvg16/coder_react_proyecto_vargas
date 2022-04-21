import React from 'react';
import './ItemListContainer.css';

function ItemListContainer(props) {
    return (
        <div>
            <p>Bienvenido a la tienda online de {props.nombre}</p>
        </div>
    );
}

export default ItemListContainer;
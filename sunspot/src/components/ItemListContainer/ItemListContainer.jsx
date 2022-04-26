import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemListContainer.css';


function ItemListContainer(props) {
    function Agregar() {
        console.log("Agregué al carrito");
    }

    return (
        <div>
            <ItemCount stock={5} inicial={1} onAdd={Agregar}/>
        </div>
    );
}

export default ItemListContainer;
import React from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';

function ItemDetail({ item }) {
    function Agregar() {
        console.log("Agregué al carrito");
    }

    return (
        <div className='itemDetail'>
            <div>
                <img src={item?.image} alt="Imagen del producto" className='imagenProducto'/>
            </div>
            <div>
                <h2>{item?.name}</h2>
                <h3>{item?.scientificName}</h3>
                <h4>Precio: $ {item?.price}, Stock disponible: {item?.stock}</h4>
                <ItemCount stock={item.stock} inicial={1} onAdd={Agregar} />
            </div>
        </div>
    );
}

export default ItemDetail;
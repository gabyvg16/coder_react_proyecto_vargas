import React, { useState } from 'react';
import ItemCount from '../ItemCount/ItemCount';
import './ItemDetail.css';
import { Link } from 'react-router-dom';

function ItemDetail({ item }) {
    const [cantidadDeProductos, setCantidadDeProductos] = useState(null);

    // Para agregar productos
    function addHandler(quantityToAdd) {
        setCantidadDeProductos(quantityToAdd);
        console.log("Agregué al carrito");
    }

    return (
        <div className='itemDetail'>
            <div>
                <img src={item?.image} alt="Imagen del producto" className='imagenProducto' />
            </div>
            <div>
                <h2>{item?.name}</h2>
                <h3>{item?.scientificName}</h3>
                <h4>Precio: $ {item?.price}, Stock disponible: {item?.stock}</h4>
                <div className='counter'>
                    {
                        cantidadDeProductos ? 
                        <button className='addButton'><Link to='/cart' className='botonTexto'>Terminar compra ({cantidadDeProductos} items)</Link></button> : 
                        <ItemCount stock={item.stock} inicial={1} onAdd={addHandler} />
                    }
                </div>
            </div>
        </div>
    );
}

export default ItemDetail;
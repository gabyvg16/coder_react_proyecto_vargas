import React, { useState } from 'react';
import './ItemCount.css';

// Componente para aumentar y disminuir cantidad de productos a agregar al carrito, considerando el stock
function ItemCount(props) {
    const [count, setCount] = useState(props.inicial);

    function handleAumentar() {
        if (count < props.stock) {
            setCount(count + 1);
        }
    }

    function handleDisminuir() {
        if (count > props.inicial) {
            setCount(count - 1);
        }
    }

    return (
        <div className='container'>
            <div className='itemCount'>
                <button className='boton' onClick={() => handleDisminuir()}>-</button>

                <input className='contador' readOnly value={count} />

                <button className='boton' onClick={() => handleAumentar()}>+</button>
            </div>

            <button className='addButton' onClick={() => (count <= props.stock) && props.onAdd()}>Agregar al carrito</button>
        </div>
    );
}

export default ItemCount;
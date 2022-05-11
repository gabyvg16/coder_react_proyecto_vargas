import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../store/cart-context';
import './ItemCart.css';

const ItemCart = ({ id, name, scientificName, price, image, quantity }) => {
    const cartCtx = useContext(CartContext);

    return (
        <div className="itemCart">
            <div className='imgContainer'>
                <Link to={'/item/' + id}><img src={image} alt={name} className="imagenCart" /></Link>
            </div>
            <div className='textContainer'>
                <Link to={'/item/' + id} className="tituloItem"><h3>{name}</h3></Link>
                <h4>{scientificName}</h4>
                <h5>Precio por unidad: $ {price}, Cantidad: {quantity}</h5>
                <button onClick={() => cartCtx.removeItem(id)}>Remover item</button>
            </div>
        </div>
    );
};

export default ItemCart
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import CartContext from '../../../store/cart-context';
import './CardWidget.css';

function CardWidget(props) {
    const cartCtx = useContext(CartContext);

    return (
        <div className='cartWidgetContainer'>
            <h6 className='cartWidgetText'>{cartCtx.totalProductos()}</h6>
            <Link to={'/cart'}><ion-icon name="cart"></ion-icon></Link>
        </div>
    );
}

export default CardWidget;
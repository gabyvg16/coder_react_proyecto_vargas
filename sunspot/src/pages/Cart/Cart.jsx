import React, { useContext } from 'react';
import CartContext from '../../store/cart-context';
import ItemCart from '../../components/ItemCart/ItemCart';
import './Cart.css';

function Cart() {
    const cartCtx = useContext(CartContext);

    return (
        <div>
            <h2>Carrito de compras</h2>
            {
                cartCtx.products.length ?
                    <>
                        <div className='cartList'>
                            {cartCtx.products.map((product) => {
                                return <ItemCart key={product.id} id={product.id} name={product.name} scientificName={product.scientificName} price={product.price} image={product.image} quantity={product.quantity} />;
                            })}
                        </div>
                        <div className='totales'>
                            <h4>Total productos: {cartCtx.totalProductos()}</h4>
                            <h4>Precio total: $ {parseInt(cartCtx.totalCosto())}</h4>
                        </div>
                        <button onClick={() => cartCtx.clear()}>Vaciar carrito</button>
                    </> :
                    <h3>El carrito está vacío</h3>
            }
        </div>
    );
}


export default Cart;
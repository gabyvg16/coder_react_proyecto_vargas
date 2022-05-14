import { createContext, useState } from "react";
import swal from 'sweetalert';

const CartContext = createContext({
    products: []
});

export const CartContextProvider = ({children}) => {
    const [productList, setProductList] = useState([]);

    // Métodos para manejar los productos del carrito
    const addItem = (product) => {
        if (isInCart(product.id)) {
            // Verifico que haya stock
            const indexProd = productList.findIndex(item => item.id === product.id);

            if (productList[indexProd].stock < (productList[indexProd].quantity + product.quantity)) {
                swal("No hay suficiente stock, por favor agregue una cantidad menor");
                return;                
            }

            // Agrego al carrito
            setProductList(productList.map(p => p.id === product.id ? {...p, quantity: p.quantity + product.quantity} : p));
        } else {
            setProductList([product, ...productList]);
        }
    }

    const removeItem = (id) => {
        const indexRemove = productList.findIndex(item => item.id === id);
        if (productList[indexRemove].quantity === 1) {
            setProductList(productList.filter(i => i.id !== id));
        } else {
            setProductList(productList.map(p => p.id === id ? {...p, quantity: p.quantity -1} : p));
        }
    }

    const clear = () => {
        setProductList([]);
    }

    const isInCart = (id) => {
        return productList.map(p => p.id).indexOf(id) !== -1;
    }

    const totalProductos = () => {
        return productList.reduce((total, value) => {
            return total + value.quantity
        }, 0)
    }

    const totalCosto = () => {
        return productList.reduce((total, value) => {
            return total + (parseInt(value.price) * parseInt(value.quantity))
        }, 0)
    }

    return (
        <CartContext.Provider value={{
            products: productList,
            addItem,
            removeItem,
            clear,
            isInCart,
            totalProductos,
            totalCosto
        }}>
            {children}        
        </CartContext.Provider>
    )
}
export default CartContext;
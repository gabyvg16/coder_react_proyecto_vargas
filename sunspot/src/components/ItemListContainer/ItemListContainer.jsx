import React, { useEffect, useState } from 'react';
// import ItemCount from '../ItemCount/ItemCount';
import ItemList from './ItemList/ItemList';
import './ItemListContainer.css';
import getData from '../../services/getData';


function ItemListContainer(props) {
    // Estado inicial
    const [products, setProducts] = useState([]);

    // Efecto
    useEffect(() => {
        getData
        .then((res) => setProducts(res))
        .catch((error) => console.log("Error: ", error))
    }, []);

    // Para usar en futuros desafíos con ItemCount
    // function Agregar() {
    //     console.log("Agregué al carrito");
    // }
    // Para usar en futuros desafíos con ItemCount 
    //         <ItemCount stock={5} inicial={1} onAdd={Agregar}/> 

    return (
        <div>
             <ItemList products={products}/>
         </div>
    );
}

export default ItemListContainer;
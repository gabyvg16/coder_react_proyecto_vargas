import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import getData from '../../services/getData';
import { useParams } from 'react-router-dom';

function ItemListContainer(props) {
    // Estado inicial
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    // Efecto
    useEffect(() => {
        getData(categoryId)
        .then((res) => setProducts(res))
        .catch((error) => console.log("Error: ", error))
    }, [categoryId]);

    return (
        <div>
             <ItemList products={products}/>
         </div>
    );
}

export default ItemListContainer;
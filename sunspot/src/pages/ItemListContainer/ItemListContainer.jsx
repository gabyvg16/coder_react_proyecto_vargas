import React, { useEffect, useState } from 'react';
import ItemList from '../../components/ItemList/ItemList';
import './ItemListContainer.css';
import { getData } from '../../services/firebase/index.js';
import { useParams } from 'react-router-dom';
import Loading from '../../components/Loading/Loading';

function ItemListContainer(props) {
    // Estado inicial
    const [loading, setLoading] = useState(false);
    const [products, setProducts] = useState([]);
    const { categoryId } = useParams();

    // Efecto
    useEffect(() => {
        setLoading(true);
        getData(categoryId)
            .then(snapshot => {
                setProducts(snapshot.docs.map(doc => { 
                    return { ...doc.data(), id: doc.id } 
                }));
            })
            .catch((error) => console.log("Error: ", error))
            .finally(() => setLoading(false))
    }, [categoryId]);

    return (
        <div>
            {loading ?
                <Loading /> :
                <ItemList products={products} />
            }
        </div>
    );
}

export default ItemListContainer;
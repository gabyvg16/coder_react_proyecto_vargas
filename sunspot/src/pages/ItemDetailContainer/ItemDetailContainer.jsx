import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import getItem from '../../services/getItem';

function ItemDetailContainer(props) {
    // Estado inicial
    const [item, setItem] = useState({});
    const { id } = useParams();

    // Efecto
    useEffect(() => {
        getItem(id)
        .then(res => setItem(res))
        .catch(error => console.log("Error: ", error))
    }, [id]);

    return (
        <div className='itemDetailContainer'>
            <ItemDetail item={item} />
        </div>
    );
}

export default ItemDetailContainer;
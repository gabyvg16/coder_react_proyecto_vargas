import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../../components/ItemDetail/ItemDetail';
import './ItemDetailContainer.css';
import getItem from '../../services/getItem';
import Loading from '../../components/Loading/Loading';

function ItemDetailContainer(props) {
    // Estado inicial
    const [loading, setLoading] = useState(false);
    const [item, setItem] = useState({});
    const { id } = useParams();

    // Efecto
    useEffect(() => {
        setLoading(true);
        getItem(id)
        .then(res => setItem(res))
        .catch(error => console.log("Error: ", error))
        .finally(() => setLoading(false))
    }, [id]);

    return (
        <div className='itemDetailContainer'>
            {loading ?
                <Loading />:
                <ItemDetail item={item} />
            }
        </div>
    );
}

export default ItemDetailContainer;
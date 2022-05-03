import React from 'react';
import { Link } from 'react-router-dom';
import './Item.css';

const Item = ({ id, name, scientificName, price, image, stock }) => {
    return (
        <div className="item">
            <Link to={'/item/' + id}><img src={image} alt={name} className="imagenTienda"/></Link>
            <Link to={'/item/' + id} className="tituloItem"><h3>{name}</h3></Link>
            <h4>{scientificName}</h4>
            <h5>Precio: $ {price}, Stock: {stock}</h5>
            <Link to={'/item/' + id}><button>Ver detalle</button></Link>
        </div>
    );
};

export default Item
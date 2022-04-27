import './Item.css';

const Item = ({ name, scientificName, price, image, stock }) => {
    return (
        <div className="item">
            <img src={image} alt={name} className="imagenTienda"/>
            <h3>{name}</h3>
            <h4>{scientificName}</h4>
            <h5>Precio: $ {price}, Stock: {stock}</h5>
        </div>
    );
};

export default Item
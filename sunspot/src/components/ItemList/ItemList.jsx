import Item from "../Item/Item";
import './ItemList.css';

// Listado de productos
const ItemList = ({ products }) => {
    return (
        <div className="itemList">
            {products.map((product) => {
                return <Item key={product.id} id={product.id} name={product.name} scientificName={product.scientificName} price={product.price} image={product.image} stock={product.stock} />
            })}
        </div >
    );
};

export default ItemList
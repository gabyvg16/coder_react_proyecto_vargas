import { addDoc, collection } from "firebase/firestore";
import { useContext, useState } from "react";
import CartContext from "../../store/cart-context";
import { db } from '../../services/firebase'
import Loading from '../../components/Loading/Loading';
import './Checkout.css';
import { Link } from "react-router-dom";


const Checkout = () => {
    const { products, totalCosto } = useContext(CartContext);
    const [loading, setLoading] = useState(false);
    const [orderID, setOrderID] = useState();
    const [buyer, setBuyer] = useState({
        Nombre: '',
        Email: '',
        Telefono: ''
    });

    // Datos del comprador
    const { Nombre, Email, Telefono } = buyer;

    // Generar orden almacenando datos en Firebase
    const generateOrder = async (data) => {
        setLoading(true);
        try {
            const col = collection(db, "Orders");
            const order = await addDoc(col, data);
            setOrderID(order.id);
            setLoading(false);
        } catch (error) {
            console.log(error);
        }
    }

    // Manejar eventos
    const handleInputChange = (e) => {
        setBuyer(({
            ...buyer,
            [e.target.name]: e.target.value
        }))
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const fecha = new Date();
        const items = products.map(e => { return { id: e.id, name: e.name, price: e.price, quantity: e.quantity } });
        const totalCompra = totalCosto();
        const detalleComra = { buyer, items, fecha, totalCompra, state: "Generada" };
        generateOrder(detalleComra);
    }

    return (
        <div className="checkoutContainer">
            {loading ? <Loading /> :
                (!orderID &&
                    <div>
                        <h2>Por favor, completar los siguientes datos para finalizar tu compra:</h2>
                        <form onSubmit={handleSubmit}>
                            <fieldset className="inputContainer">
                                <label className="label" for="Nombre">Nombre:</label>
                                <input className="inputText" type="text" name="Nombre" value={Nombre} onChange={handleInputChange} required />
                            </fieldset>
                            <fieldset className="inputContainer">
                                <label className="label" for="Telefono">Teléfono:</label>
                                <input className="inputText" type="tel" name="Telefono" placeholder="formato 1112345678" pattern="[0-9]{10}" value={Telefono} onChange={handleInputChange} required />
                            </fieldset>
                            <fieldset className="inputContainer">
                                <label className="label" for="Email">Email:</label>
                                <input className="inputText" type="email" name="Email" value={Email} onChange={handleInputChange} required />
                            </fieldset>
                            <input type="submit" className="boton" value="Finalizar compra" />
                        </form>
                    </div>)
            }
            <div>
                {orderID && (
                    <div>
                        <h2>¡Compra finalizada!</h2>
                        <h4>Su código de orden es {orderID}</h4>
                        <button className='boton'><Link to='/' className='boton'>Realizar otra compra</Link></button>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Checkout;
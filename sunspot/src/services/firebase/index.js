import { initializeApp } from "firebase/app";
import { collection, doc, getDocs, getDoc, getFirestore, query, where } from 'firebase/firestore';

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBrJyANjIiTg1cVl1HvNluuN-M2u6NiLYg",
    authDomain: "sunspot-93034.firebaseapp.com",
    projectId: "sunspot-93034",
    storageBucket: "sunspot-93034.appspot.com",
    messagingSenderId: "142813898280",
    appId: "1:142813898280:web:8e8f28baac604d95f0771d"
};

// Initialize Firebase
initializeApp(firebaseConfig);


export const db = getFirestore();

// Obtiene listado de productos por categoría. Si no se informa categoría, muestra todos los productos.
export function getData(category) {
    const itemCollection = collection(db, 'items');

    const q = category && query(
        itemCollection,
        where("category", "==", category)
    );

    return getDocs(q || itemCollection);
}

// Obtiene detalle de un item
export function getItem(id) {
    const itemRef = doc(db, 'items', id);
    return getDoc(itemRef);
}
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore';
// import data from './data';

function getData(category) {
    const db = getFirestore();
    const itemCollection = collection(db, 'items');

    const q = category && query(
        itemCollection,
        where("category", "==", category)
    );

    return getDocs(q || itemCollection);

    // const myPromise = new Promise((resolve) => {
    //     const productsFiltered = category ? data.filter(product => product.category === category) : data;

    //     setTimeout(() => {
    //         resolve(productsFiltered);
    //     }, 2000);
    // });
    // return myPromise;
}

export default getData;
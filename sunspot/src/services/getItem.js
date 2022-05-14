import { doc, getDoc, getFirestore } from 'firebase/firestore';
// import data from './data';

function getItem(id) {
    const db = getFirestore();

    const itemRef = doc(db, 'items', id);
    return getDoc(itemRef);

    // const myPromise = new Promise((resolve) => {
    //     const item = data.filter(item => item.id === parseInt(id));
        
    //     setTimeout(() => {
    //         resolve(item[0]);
    //     }, 2000);
    // });
    // return myPromise;
}

export default getItem;
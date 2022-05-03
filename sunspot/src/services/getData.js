import data from './data';

function getData(category) {
    const myPromise = new Promise((resolve) => {
        const productsFiltered = category ? data.filter(product => product.category === category) : data;

        setTimeout(() => {
            resolve(productsFiltered);
        }, 2000);
    });
    return myPromise;
}

export default getData;
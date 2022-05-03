import data from './data';

function getItem(id) {
    const myPromise = new Promise((resolve) => {
        const item = data.filter(item => item.id === parseInt(id));
        
        setTimeout(() => {
            resolve(item[0]);
        }, 2000);
    });
    return myPromise;
}

export default getItem;
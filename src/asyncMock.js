export const products = [
    {
        id: '1',
        name: 'Chocolate con Almendras',
        category: 'chocolate',
        img: './images/Chocolatebar1.jpg',
        stock: 25,
        description: 'Chocolate con almendras'
    },
    { id:'2', name: 'Chocolate2', price: 880, category: 'chocolate', img: './images/Chocolatebar1.jpg'},
    { id:'3', name: 'Chocolate3', price: 750, category: 'chocolate', img: './images/Chocolatebar1.jpg'}
];

export const getProducts = () => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products);
        }, 500);
    });
};

export const getProductById = (productId) => {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(products.find(prod => prod.id === productId));
        }, 500);
    });
};

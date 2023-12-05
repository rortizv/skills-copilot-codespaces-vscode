// fetch GET this data https://api.escuelajs.co/api/v1/products
let products = [];

const getProducts = async () => {
    try {
        const response = await fetch('https://api.escuelajs.co/api/v1/products');
        products = await response.json();
        console.log(products);
    } catch (error) {
        console.error(error);
    }
}

getProducts();

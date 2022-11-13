// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to
import m3 from "./pages/images/m3.png";
import m4 from "./pages/images/m4.png";
const productsArray = [
    {
        id: "price_1M3OIgIYkORfeKopZkQ0tmPH",
        title: "Coffee",
        price: 4.99,
        image: m4
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "Sunglasses",
        price: 9.99,
        image: m4
    },
    {
        id: "price_1M3DbBIYkORfeKoppRbzWMOY",
        title: "Camera",
        price: 39.99,
        image: m3
    }
];

function getProductData(id) {
    let productData = productsArray.find(product => product.id === id);

    if (productData == undefined) {
        console.log("Product data does not exist for ID: " + id);
        return undefined;
    }

    return productData;
}

export { productsArray, getProductData };
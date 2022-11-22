// Coffee: price_1LnUTFDM1jwCEz8OGoOSXiSM
// Sunglasses: price_1LnUTxDM1jwCEz8OAqHYTwKQ
// Camera: price_1LnUUoDM1jwCEz8OvxIcJ7to
import m3 from "./pages/images/m3.png";
import m4 from "./pages/images/m4.png";
import taycan from "./pages/images/taycan.png";
import type_r from "./pages/images/HondatypeR.png";
import r8 from "./pages/images/r8.png";
const productsArray = [
    {
        id: "price_1M4YSZIYkORfeKopZWBNU7xW",
        title: "BMW M3 Base",
        price: 69999.99,
        image: m3
    },
    {
        id: "price_1LnUTxDM1jwCEz8OAqHYTwKQ",
        title: "BMW M4 Base",
        price: 69999.99,
        image: m4
    },
    {
        id: "price_1M3DbBIYkORfeKoppRbzWMOY",
        title: "BMW M4 Competition",
        price: 129999.99,
        image: m3
    },
    {
        id: "price_1M6mU5IYkORfeKop8vdRTstx",
        title: "Audi R8",
        price: 99999.99,
        image: r8
    },
    {
        id: "price_1M6mjVIYkORfeKopU83ayz7i",
        title: "Honda Type R",
        price: 29999.99,
        image: type_r
    },
    {
        id: "price_1M6mnbIYkORfeKop6ySohzPv",
        title: "Porshe Taycan",
        price: 86699.99,
        image: taycan
    },

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
let products = [
    { productId: 1, productName: "NodeJS", count: 1, price: 9.99, image: "https://th.bing.com/th/id/OIP.wzFbwLoX-F1nhPzkFhOeTwHaHa?w=169&h=180&c=7&r=0&o=5&pid=1.7", stock: 8 },
    { productId: 2, productName: "React", count: 1, price: 19.99, image: "https://th.bing.com/th/id/OIP.33CwBYkmnMfpA9Djup22JwHaHa?w=167&h=180&c=7&r=0&o=5&pid=1.7", stock: 5 },
    { productId: 3, productName: "Angular", count: 1, price: 29.99, image: "https://th.bing.com/th/id/OIP.IbhLrnKBjHWsgC6jU8nNpgHaKC?w=130&h=180&c=7&r=0&o=5&pid=1.7", stock: 13 }
];

class Product {
    constructor(productId, productName, price, image, stock) {
        this.productId = productId;
        this.productName = productName;
        this.price = price;
        this.image = image;
        this.stock = stock;
    }

    // get all products
    get() {
        return products
    }

    // get single product by id
    getById(id) {
        const index = products.findIndex(item => item.productId == id)
        return products[index]
    }

    updateArray(data) {
        products.map((item ,index)=> {
            if(data.productId == item.productId){
                if (item.stock < data.count) {
                    throw new Error('Exceeds stock limit');
                }
                data.stock -= data.count;
                data.count = 1;
                products.splice(index, 1, data)
            }
        })
    }
}
module.exports = Product
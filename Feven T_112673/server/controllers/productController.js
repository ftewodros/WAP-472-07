const Product = require('../models/product')
const User = require('../models/users')

const product = new Product()
const user = new User()

//get all products
const getAllProducts = (req, res) => {
    return res.status(200).send((product.get()));
}

// get product by id 
const getProductById = (req, res)=>{
    return res.status(200).json(product.getById(req.params.productId));
}

// get users products || shopping cart
const getUsersProducts = (req, res)=>{
    return res.status(200).json(user.getCart(req.params.userId));
}

// add to cart 
const addToCart = (req, res)=>{
    return res.status(200).json(user.addProductToCart(req.params.userId, req.params.productId));
}

 const placeOrder = (req, res)=>{
   
    const cartArray = req.body.array
    cartArray.map(item=>{
        product.updateArray(item)
    })
    return res.status(200).json(product.get());
}

module.exports = { getAllProducts , getProductById, getUsersProducts, placeOrder}
const Product = require('../models/product');

exports.save = (req, res, next) => {
    let obj = req.body;
    let newAddedProduct = new Product(obj.id, obj.title, obj.price, obj.description).save();
    res.status(200).json(newAddedProduct); //view
}

exports.getAll = (req, res, next) => {
    res.status(200).json(Product.getAll());
}
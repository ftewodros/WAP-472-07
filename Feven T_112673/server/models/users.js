
const Product = require('../models/product')
const product = new Product()

let users = [
    { userId: 1, username: "feven", password: "123", sessionId: "1234", usersCart: [{ productId: 1, productName: "Angular", price: 29.99, Image:"" ,stock:13}] },
    { userId: 2, username: "abel", password: "123", sessionId: "22", usersCart: [] },
    { userId: 3, username: "shizi", password: "123", sessionId: "33", usersCart: [] },
];

 class User{
    constructor(userId, username, password) {
        this.userId = userId;
        this.username = username;
        this.password = password;
    }

    // get all users 
     get(){
        return users
    }

    

    // get user by id
    getById(id){
        const index =users.findIndex(item=>item.userId == id)
        return users[index]
    }

    // get cart of user by id 
    getCart(userId){
        const usersIndex =  users.findIndex((data)=>data.userId == userId)
        return users[usersIndex]
    }



}
module.exports = User
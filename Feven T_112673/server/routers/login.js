const express = require("express");
const router = express.Router();

const User = require('../models/users')
const userobj = new User()

router.post('', (req, res, next)=> {

    const userArr = userobj.get()
    const user = userArr.find(user => user.username === req.body.username && user.password == req.body.password);
    if(user){
        // sending token to the front end or client 
        res.json({accessToken: `${user.userId}-${user.username}-${Date.now().toString()}`})
    } else {
        res.json({error: 'Invalid username and password!'});
    }
});




module.exports = router
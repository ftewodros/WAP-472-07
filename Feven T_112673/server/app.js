const express = require('express');
const cors = require('cors');
const productRouters = require('./routers/product');
const loginRouter = require('./routers/login')

// creating our server
const app = express();
app.use(cors());
app.use(express.json());

// routers
app.use('/login', loginRouter);


// middle ware, checks weather the reqest have token 
app.use((req, res, next) => {
    const auth = req.headers.authorization;
    const token = auth.split(' ')[1]
    if(token === 'null'){
        res.json({error: 'No Access Token'});
    } else {
        req.user = token.split('-')[0];
        next();
    }
})

app.use('/product', productRouters);

app.listen(9000, () => console.log('Your Server is running'));

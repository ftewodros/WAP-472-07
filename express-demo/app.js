const express = require('express');
const path = require('path');
const productRouter = require('./routes/productRouter');
const userRouter = require('./routes/userRouter');
const app = express();

app.set('port', process.env.PORT || 3000);


// demo next('route')

app.get('*', (req, res, next) => {
    console.log('Hi from the 1st middleware 1.............');
    next('route');
}, (req, res, next) => {
    console.log('This is an Optional middleware/callback 2...........');
    next();
});

app.use(express.urlencoded({
    extended: true
}));
app.use('/somethingelse', express.static(path.join(__dirname, 'public', 'css')));

app.use('/product', productRouter);
app.use('/user', userRouter);


app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});

app.use(function(err, req, res, next) {
    console.log('---------------');
    res.status(500).send(`Something broke! ${err}`);
});

const port = app.get('port');

app.listen(port, () => {
    console.log('Your Server is running on ' + port);
});
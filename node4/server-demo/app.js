const express = require('express');
const productRouter = require('./routes/productRouter');

const app = express();

app.use(express.json());

app.use(productRouter);

app.use((req, res, next) => {
    res.end('Page Not Found');
});

app.listen(3000, () => { console.log('listening on 3000') });
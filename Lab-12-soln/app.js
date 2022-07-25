
//1st Step--------------- create new package npm init -y
//2nd Step--------------- Dependencies npm intsall express

//3rd step Instantiation create app.js file and add bellow code 
//const express =require('expreess) let app =express(); app.set('port',process.env.PORT||3000); let port=app.get('port');
const express = require('express');
const { path } = require('express/lib/application');
const req = require('express/lib/request');
const path1 = require('path');
// const res = require('express/lib/response');

const productRouter=require('./routes/pRouter');
const userRouter=require('./routes/uRouter');


const app = express();

 //4th Step---------------- COnfiguration 2 step set and enable/disable 
 //what is middleware is a useful pattren that allows developers to reuse code with in their application 
 //or share it with other in form of modeules MW fun have 3 argunmnets(req,res,next) and MW err have 4 argunments
// app.set('port', process.env.PORT || 3000);
// let port = app.get('port');

app.use(express.urlencoded({
    extended:true
}
));

app.use(express.static(path1.join(__dirname,'public','assets','css')));
app.use('/product',productRouter);
app.use('/user',userRouter);

// app.use((req, res, next) => {
//     res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
// });

app.use('/',function(err, req, res, next) {
    res.status(404).sendFile(path.join(__dirname, 'views', '404.html'));
});



app.listen(3000, () => {
    console.log('listen on 3000' );
});
    //config set for number,object,string --> enable for boolean

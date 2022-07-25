const express=require('express');
const path =require('path')
const { route } = require('./uRouter');
const router= express.Router();
let data1=[]

router.get('/add', (req, res, next) => {
    res.sendFile(path.join(__dirname,'..', 'views', 'index.html'));
});

// app.use((req,res,next)=>{
//     const body=[];
//     req.on('data',(chunks)=>{
//      body.push(chunks);});
//      req.on('end',()=>{
//          let obj={}
// const parbody=Buffer.concat(body).toString();
//    parbody.split('&').forEach(i=>{
// let each= i.split('=');
// obj[each[0]]=each[1];})
// req.body=obj;
// next();  
//      })
      
//  })

router.post('/save', (req, res, next) => {
    
    data1.push(req.body);
        console.log(data1);
    res.send('saved');

})
router.get('/allproduct',(req,res,next)=>{
res.json(data1);
})
module.exports=router;
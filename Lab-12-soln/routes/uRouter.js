const express=require('express');
const res = require('express/lib/response');
const { append } = require('express/lib/response');
const router= express.Router();

router.get('/user',(req,res,next)=>{
    res.end('user get wala');
    });
   router.post('/user',(req,res,next)=>{
       res.end('user get wala');
       })
       router.all('/user/*',(req,res,next)=>{
           res.end('user all wala');
           })
            router.use('/user/:uid/posts/pid',(req,res)=>{
              console.log('prams:'+req.params);
              console.log('query',req.query);
              res.send('something domething')


            }) 
        
module.exports=router;
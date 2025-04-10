const express = require('express');
const app = express();

app.use(express.json());

const consoleParams = (req,res,next)=>{
    if(Object.keys(req.params).length>0) console.log('Path:',req.params);
    if(Object.keys(req.query).length>0) console.log('Query:',req.query);
    if(Object.keys(req.body).length>0) console.log('Body:',req.body);
    if(!Object.keys(req.params).length && !Object.keys(req.query).length && !Object.keys(req.body).length){
        console.log('No params found');
    }
    next();
}

app.get('/user/:id',consoleParams,(req,res)=>{
    res.send('Hello world');
})

app.post('/',consoleParams,(req,res)=>{
    res.json(req.body);
});

app.listen(3000,()=>{
    console.log(`Server running at http://localhost:3000`)
})
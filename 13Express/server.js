const express = require('express');

const app = express();

const logger = (req,res,next)=>{
    console.log(`Request made ${req.method}, ${req.url}`)
    next();
}

app.use(logger);

app.get(['/','/dashboard'],(req,res)=>{
    res.send('Hello world');
})

app.get('/abc',(req,res)=>{
    res.redirect(301, '/');
})

app.use((req,res)=>{
    res.status(404).send('Page not found')
})

app.listen(5888,()=>{
    console.log(`http://localhost:5888`)
})
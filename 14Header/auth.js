const express = require('express');

const app = express();

const auth = (req,res,next)=>{
    if(req.header('Auth')=='True'){
        console.log('Header allowed');
        next();
    }
    else{
        res.status(403).send('Request forbidden')
    }
}

const printHeaders = (req,res,next)=>{
    const headers = {Host:req.header('Host'), UserAgent:req.header('User-Agent')};
    console.log(headers);
    next();
}

app.use(auth);
app.use(printHeaders);

app.get(['/dashboard'],(req,res)=>{
    res.send('Hello world');
})

app.listen(5888,()=>{
    console.log(`http://localhost:5888`)
})
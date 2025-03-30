const express = require('express');

const app = express();

app.get('/sum',(req,res)=>{
    const {num1,num2} = req.query;

    if(!num1 || !num2 || isNaN(num1) || isNaN(num2)){
        res.status(400).send('Please provide appropriate numbers');
    }

    else{
        const sum = parseInt(num1)+parseInt(num2);
        res.json(sum);
    }
})

app.listen(5888,()=>{
    console.log(`http://localhost:5888`)
})
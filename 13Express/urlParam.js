const express = require('express');

const app = express();

const users = [{id:1,name:'sathish'},{id:2,name:'Kumar'},{id:3,name:'ALice'}];

app.get('/users',(req,res)=>{
    res.json(users)
})

app.get('/users/:id',(req,res)=>{
    const userId = parseInt(req.params.id);

    const user = users.find(user=>userId===user.id);

    if(user){
        res.json(user);
    }
    else{
        res.status(404).send('User not found')
    }
})

app.listen(5888,()=>{
    console.log(`http://localhost:5888`)
})
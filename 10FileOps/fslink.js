const fs = require('fs');

fs.link('original.txt','newfile.txt',(err)=>{
    if(err){
        console.log('Error',err);
    }
    console.log('Hardlink created');
})
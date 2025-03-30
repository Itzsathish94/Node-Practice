const fs = require ('fs');
const path = require('path');

const rs = fs.createReadStream(path.join(__dirname,'bigFile.txt'),'utf-8');
const ws = fs.createWriteStream(path.join(__dirname,'writeFile.txt'));

rs.on('data',(chunk)=>{
    ws.write(chunk)
});
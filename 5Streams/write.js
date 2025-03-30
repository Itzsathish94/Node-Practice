const fs = require('fs');
const path = require('path');

const ws = fs.createWriteStream(path.join(__dirname,'write.txt'),'utf-8');

ws.write(`\n Hello`);
ws.write(`\n Data`);
ws.end(`\n End`);
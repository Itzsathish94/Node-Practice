const fs = require('fs');
const path = require('path');
const date = new Date().toLocaleDateString();

for(let i=1;i<=3;i++){
    fs.writeFileSync(path.join(__dirname,`DateFile${i}.txt`),date);
    console.log(`Date File ${i} created`);
}


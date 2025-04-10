const fs = require('fs');
const path = require('path');

const directoryPath = '../../Node'

fs.readdir('../../Node', (err, files) => {
    if (err) {
        return console.error('Error reading directory:', err);
    }
    
    files.forEach(file=>{
        const fullPath = path.join(directoryPath,file);
        if(fs.lstatSync(fullPath).isFile()){
            console.log('File',file);
        }
    })
    
});

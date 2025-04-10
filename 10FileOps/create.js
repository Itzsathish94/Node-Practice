const fs = require('fs').promises;
const path = require('path');

const fileOps = async()=>{
    try{
    await fs.mkdir('FILECREATION',{recursive:true});
    const filepath = path.join('FILECREATION','newfile.txt');
    await fs.writeFile(filepath,'New file created');
    console.log('File created successfully')
}
catch(err){
    console.log(err);
}
}

fileOps()
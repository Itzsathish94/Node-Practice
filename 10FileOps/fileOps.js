const fs = require('fs').promises
const path = require('path');

const fileOps = async()=>{
    try{
        await fs.writeFile(path.join(__dirname,'test.txt'),'hi');
        console.log('File written');
        await fs.appendFile(path.join(__dirname,'test.txt'),'\nAppended data')
        console.log('File appended')
        const data = await fs.readFile(path.join(__dirname,'test.txt'))
        if(data.includes('data')){
            console.log('Data found')
        }
        await fs.rename(path.join(__dirname,'test.txt'),path.join(__dirname,'newname.txt'));
        console.log('File renamed');
        await fs.unlink(path.join(__dirname,'newname.txt'));
        console.log('File deleted');
    }
    catch(error){
        console.log(`ERROR:${error.message}`);
    }
}

fileOps();
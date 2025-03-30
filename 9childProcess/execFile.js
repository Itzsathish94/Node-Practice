const {execFile} = require('child_process');
const path = require('path');

const batchFilePath = path.join(__dirname,'sample.bat');

execFile('cmd.exe',['/c',batchFilePath],(error,stdout,stderr)=>{
    if(error){
        console.error(`Error executing batch file: ${error.message}`);
        return;
    };
    if(stderr){
        console.error(`stderr:${stderr}`);
        return;
    }
    console.log(`stdout:${stdout}`);
})

console.log(batchFilePath);
const {exec} = require('child_process');

exec('dir',(error,stdout,stderr)=>{
    if(error){
        console.log(`Execution error:${error.message}`);
        return;
    }
    if(stderr){
        console.log(`Standard error:${stderr}`);
        return;
    }
    console.log(`Directory contents:\n${stdout}`);
});
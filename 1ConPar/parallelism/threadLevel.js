//threadlevel

const {Worker,isMainThread,threadId} = require('worker_threads');

if(isMainThread){
    console.log(`Main thread ${process.pid}: Spawning workers.......`);
    new Worker(__filename);
    new Worker(__filename);
}
else{
    console.log(`Worker ${threadId} is running in parallel`);
};


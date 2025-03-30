const cluster = require('cluster');
const http = require('http');
const os = require('os');

if(cluster.isMaster){
    const numCPUS = os.cpus().length;
    console.log(`Master process ${process.pid} is running`);

    for(let i=0;i<numCPUS;i++){
        cluster.fork();
    }

    cluster.on('exit',(worker)=>{
        console.log(`Worker ${worker.process.pid} has died. Restarting....`);
        cluster.fork();
    })
}
else{
    const server = http.createServer((req,res)=>{
        if(req.url==='/' || req.url ==='/dashboard'){
            res.end('Hello from worker '+process.pid)
        }
        else{
            res.end('Page not found');
        }
    })

    server.listen(3000,()=>{
        console.log(`Worker ${process.pid} is running on http://localhost:3000`);
    })
}
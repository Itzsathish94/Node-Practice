const {Worker} = require('worker_threads');

const worker = new Worker('./review');

worker.on('message',(msg)=>console.log(msg));
worker.on('error',(err)=>console.log(err));
worker.on('exit',(code)=>console.log(`Worker exited with code ${code}`));

worker.postMessage(5);
const {Worker} = require('worker_threads');

const worker = new Worker('./worker.js');

worker.on('message',(msg)=>console.log(`Data from worker:`,msg));
worker.on('error',(err)=>console.log(err));
worker.on('exit',(code)=>console.log(`Worker exited with code:${code}`));

worker.postMessage(5);


// function runWorker(){
//     return new Promise((resolve,reject)=>{
//         const worker = new Worker('./worker.js');

//         worker.on('message',resolve);
//         worker.on('error',reject);
//         worker.on('exit',(code)=>{
//             if(code!==0){
//                 reject(new Error(`Worker stopped with exit code: ${code}`))
//             }
//         })

//         worker.postMessage(5);
//     })
// }

// runWorker()
// .then((res)=>console.log(res))
// .catch((err)=>console.log(err));
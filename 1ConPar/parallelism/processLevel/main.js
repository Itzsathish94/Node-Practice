//processLevel

const {fork} = require('child_process');

console.log(`Main process ${process.pid}: Spawning workers.....`)

fork('worker.js');
fork('worker.js');
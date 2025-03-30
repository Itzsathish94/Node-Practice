const cron = require('node-cron');

task = cron.schedule("*/5 * * * * *",()=>{
    console.log('Running task every 5 second,', new Date().toLocaleTimeString());
})

setTimeout(()=>{
    task.stop();
    console.log('Cron job stopped');
},30000)
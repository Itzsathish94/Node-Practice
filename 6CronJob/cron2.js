const cron = require('node-cron');
const task = cron.schedule("* * * * * *",()=>{
    console.log('Running every second');
})

setTimeout(()=>{
    task.stop();
    console.log('Task stopped');
},10000)


/// second minute hour dayOFMonth Month dayOfWeek
// */5 - runs every 5th unit
// 5 - exactly runs at 5th unit
// 1,12 - runs at 1st and 12th unit 
// 1 - 12 - runs between 1st and 12th unit (range)
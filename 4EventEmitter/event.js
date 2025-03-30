const eventEmitter = require('events');
const emitter = new eventEmitter();

emitter.on('pizza',(size,topping)=>{
    console.log(`Baking ${size} ${topping} pizza`);
})

emitter.on('pizza',(size)=>{
    if(size==='large'){
        console.log(`Complimentary drink with ${size} pizza`)
    }
})

emitter.emit('pizza','large','mushroom');
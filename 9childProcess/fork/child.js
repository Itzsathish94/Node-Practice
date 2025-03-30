process.on('message',(msg)=>{
    console.log(msg);
})

let counter = 0;

setInterval(() => {
    process.send({counter:counter++})
    if(counter>3){
        process.exit(0);
    }
}, 1000);
const {fork} = require('child_process');
const child = fork('./child');

child.on('message',(msg)=>{
    console.log(msg);
});

child.on('exit',()=>{
    console.log('Child process terminated');
})

child.send('Hi from parent');
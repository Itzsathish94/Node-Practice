const {Duplex} = require('stream');

const duplex = new Duplex({
    read(){
        this.push('Hello from Duplex Stream\n');
        this.push(null);
    },
    write(chunk,encoding,callback){
        console.log(`Received : ${chunk.toString().toLowerCase()}`);
        callback();
    }
})

duplex.write('Testing duplex');
duplex.pipe(process.stdout);
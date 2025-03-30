const http = require('http');
const server = http.createServer((req,res)=>{
    if(req.url === '/' || req.url=== '/dashboard'){
        res.writeHead('200',{'content-type':'Text/Plain'});
        res.write('Hello world');
        res.end();
    }
    else{
        res.writeHead('404',{'content-type':'Text/Plain'});
        res.end('Page not found')
    }
})

server.listen(5888,()=>{
    console.log(`http://localhost:5888`)
})
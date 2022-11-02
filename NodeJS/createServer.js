const http = require('http');

const server = http.createServer((req, res)=>{
    res.write('Hello');
    res.end();
    // or
    // res.end('Node server live now')
})

server.listen(5000, 'localhost', ()=>{
    console.log('Server listen on port 5000')
})
const http = require('http');

// const server = http.createServer((req, res)=>{
//     res.end('Node server live now' + req.url)
// })

const server = http.createServer((req, res)=>{
    if (req.url=='/') {
        res.end('HomePage')
    } else if(req.url=='/about'){
        res.end('AboutPage');
    }
    else if(req.url=='/contact'){
        res.end('ContactPage');
    }else{
        res.writeHead(404, {'content-type': 'text/html'})
        res.end('404');
    }
})

server.listen(8000, 'localhost', ()=>{
    console.log('Server listen on port 8000')
})
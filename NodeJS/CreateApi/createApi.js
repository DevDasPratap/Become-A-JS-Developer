const http=require('http');
const fs =require('fs');
const server=http.createServer((req, res)=>{
    // res.write('Hello Node JS'+ req.url);
    // res.end();
    // or
    if (req.url=='/') {
        res.end('Node home page');
    }
    else if (req.url=='/about') {
        res.end('Node about page');
    }
    else if (req.url=='/contact') {
        res.end('Node contact page');
    }
    else if (req.url=='/apidata') {
        fs.readFile(`${__dirname}/apidata/user.json`, "utf-8", (err, data)=>{
            console.log(data);
            // res.end(data);
            // or
            const objData=JSON.parse(data);
            res.writeHead(200, {'Content-type': 'application/json'});
            res.end(objData[0].name);
        })
    }
    // else{
    //     res.end('node page not found');
    // }
    // or
    else{
        res.writeHead(404); //for check on inspect network tab
        res.end('node page not found');
    }
});

server.listen(8080, ()=>{
    console.log('Server running on port 8080');
})
const express=require('express');
const app=express();

app.get('/', (req, res)=>{
    res.send('Node server running');
});

//Parameter pass
app.get('/:id', (req, res)=>{ // :id= any parameter req accept
    res.send('Node request parameter is: '+req.params.id);
});

//Multiple quiry parameter pass
app.get('/user/:name/:id', (req, res)=>{ //multiple parameter :id= any parameter req accept
    res.send(`Node server parameter request ${req.params.name}, ${req.params.id}`);
});

//Multiple quiry parameter pass with filter
// 0-9 => accept only 0-9 numaric value
// {4} => min 4 or max 4 length required
//ex: http://localhost:8080/4444 or http://localhost:8080/1234
app.get('/:id([0-9]{4})', (req, res)=>{ // :id= any parameter req accept
    res.send('Node request parameter is: '+req.params.id);
});

//Multiple quiry parameter pass with filter
// ex: http://localhost:8080/abcde
app.get('/:id([a-z]{5})', (req, res)=>{ // :id= any parameter req accept
    res.send('Node request parameter is: '+req.params.id);
});

//ex http://localhost:8080/16911 or http://localhost:8080/1691p
app.get('/:id([a-z, 0-9]{5})', (req, res)=>{ // :id= any parameter req accept
    res.send('Node request parameter is: '+req.params.id);
});

// Not found url
app.get('*', (req, res)=>{
    res.send('URL not found on node server');
});

app.listen(8080); 
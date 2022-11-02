const express = require('express');
const path = require('path');
const app = express();
 

app.get('/login',(req, res)=>{
    res.sendFile(path.join(__dirname+'/login.html'));
})

app.post('/login',(req, res)=>{})

app.listen(5000);
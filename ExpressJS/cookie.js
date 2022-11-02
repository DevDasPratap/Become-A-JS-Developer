const express = require('express');
const app = express();
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.get('/',(req, res)=>{
    console.log('Cookie: ', req.cookies)

    res.cookie('name', 'pratap das', {expire:10000+Date.now()})
    .send('Cookie Set Successfully');
})

app.get('/clear', (req, res)=>{
    res.clearCookie('name');
    res.send('Cookies clear successfully');
})

//create server
app.listen(5000, ()=>{
    console.log('Server running on port no: 5000');
})
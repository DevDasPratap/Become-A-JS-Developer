const express = require('express');
const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

app.get('/form', (req, res)=>{
    res.render('form');
})
app.get('/get-data',(req, res)=>{
    res.send(`Your first name: ${req.query.fname}, last name is: ${req.query.lname}`)
})


// create routes
app.get('/', (req, res)=>{
    res.send('Get Root page')
})
app.post('/', (req, res)=>{
    res.send('Post Root page')
})
app.put('/', (req, res)=>{
    res.send('Put Root page')
})
app.delete('/', (req, res)=>{
    res.send('Delete Root page')
})
app.all('/login', (req, res)=>{
    res.send('All routes page')
})

//create server
app.listen(5000, ()=>{
    console.log('Server running on port no: 5000');
})
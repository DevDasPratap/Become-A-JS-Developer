const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/company');

// ---------------------------------------------------

// Import express
const express = require('express');
const app = express();

// Import employeeRoute route
const employeeRoute = require('./routes/employeeRoute');
app.use('/', employeeRoute.user_route)

// Server and port
app.listen(5000, ()=>{
    console.log('Server run on port no: 5000');
})

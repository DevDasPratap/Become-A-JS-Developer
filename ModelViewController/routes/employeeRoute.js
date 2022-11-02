const express = require('express');
const user_route = express();

const bodyParser = require('body-parser');
user_route.use(bodyParser.json());
user_route.use(bodyParser.urlencoded({extended:true}))

// view load
user_route.set('view engine', 'ejs');
user_route.set('views', './views');

const employee = require('../controllers/employeeController');

//routes
user_route.get('/register',(req, res)=>{
    res.render('register');
})

//view connect with controller
user_route.post('/register', employee.insertEmployee);


// Export
module.exports={
    user_route
}
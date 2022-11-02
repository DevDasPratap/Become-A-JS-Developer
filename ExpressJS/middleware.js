const express=require('express');
const app=express();

// Create middleware for /user route
// app.use((req, res, next)=>{
//     console.log('Satrt');
//     console.log(`New user recived at ${Date.now()}`);
//     next(); //next: after recived data goto next
// })

// app.get('/user', (req, res)=>{
//     res.send('I Got it');
// });


//create another middleware for root page
// app.use((req, res, next)=>{
//     console.log('Satrt');
//     next(); //next: after recived data goto next
// })
// app.get('/', (req, res, next)=>{
//     res.send('I Got it Root page');
//     next();
// });
// app.get('/', (req, res)=>{
//     console.log('End')
// })


// Third party middleware (bodyParser, cookise perser, express session, etc)
// const bodyParser = require('body-parser'); //get data from form
// app.use(bodyParser.urlencoded({extended:false})); //get data from form encoded
// app.use(bodyParser.json()); // convert form data into json


//Example- Create Middleware
app.use('/:age', (req, res, next)=>{
    if (req.params.age < 18) {
        res.redirect('/kids');
    }
    next();
})
app.get('/kids', (req, res)=>{
    res.send('Your age below 18 that why you cant access this URL');
})
app.get('/:age', (req, res)=>{
    res.send('Your age: '+req.params.age);
})



app.listen(5000);
const express=require('express');
const app=express();

app.set('view engine', 'ejs');
app.set('views', './views');

//create routes
app.get('/home',(req, res)=>{
    res.render('home',{
        // Passing value in template
        name:'My home page',
        url: 'https://nedcod.com',
        user:{
            age: 26,
            mob: 70000001,
            email: 'Pratap@gmail.com'
        }
    });
})

app.listen(5000); 
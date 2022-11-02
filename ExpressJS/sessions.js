const express = require('express');
const app = express();
const session = require('express-session');

app.use(session({secret:'My secrect here'}))

// app.get('/',(req, res)=>{
//     req.session.username='Pratap Das';
//     res.send('Session set successfully');
// })
// app.get('/get-session',(req, res)=>{
//     res.send(`Your session user name is: ${req.session.username}`);
// })

app.get('/',(req, res)=>{
    if (req.session.user_visit) {
        req.session.user_visit++;
        res.send(`Your visited this page ${req.session.user_visit} times`);
    } else {
        req.session.user_visit=1;
        res.send(`Your visited this page first time`);
    }
})


//create server
app.listen(5000, ()=>{
    console.log('Server running on port no: 5000');
})
const express = require('express');
const app = express();

const user=[]

app.post('/signup', (req,resp)=>{
    const username = req.body.username
    const password = req.body.password

    user.push(username, password);

    resp.send ({
        message : "your credentials are saved",  
    })
    
}),
app.post('/signin', (req,resp)=>{
    
})
app.post('/me', (req,resp)=>{

})
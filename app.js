const express = require('express');
const app = express();
const path = require('path');
const publicPath = path.resolve(__dirname,'./public')

app.use(express.static('public'));

app.get('/',(req, res) => {
    let homeHTMLPath = path.join(__dirname,'./views/home.html')
    res.sendFile(homeHTMLPath);
});
app.get('/login',(req, res) => {
    let loginHTMLPath = path.join(__dirname,'./views/login.html')
    res.sendFile(loginHTMLPath);
});
app.get('/signin',(req, res) => {
    let signinHTMLPath = path.join(__dirname,'./signin/login.html')
    res.sendFile(signinHTMLPath);
});

app.listen(3000,() => {console.log("Servidor escuchando puerto 3000")});

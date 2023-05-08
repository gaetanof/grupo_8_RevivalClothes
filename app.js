const express = require('express');
const path = require('path');
const app = express();
const publicPath = path.join(__dirname,'./public')

app.use(express.static('public'));

app.get('/',(req, res) => {
    let homeHTMLPath = path.join(__dirname,'./views/home.html')
    res.sendFile(homeHTMLPath);
});
app.get('/login',(req, res) => {
    let loginHTMLPath = path.join(__dirname,'./views/login.html')
    res.sendFile(loginHTMLPath);
});


app.listen(3000,() => {console.log("Servidor escuchando puerto 3000")});

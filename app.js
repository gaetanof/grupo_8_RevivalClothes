const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.static('public'));

app.listen(PORT, () => {console.log(`Servidor escuchando puerto ${PORT} 🚀`)});

app.get('/', (req, res) => {
    let homeHTMLPath = path.join(__dirname,'./views/home.html')
    res.sendFile(homeHTMLPath);
});

app.get('/login', (req, res) => {
    let loginHTMLPath = path.join(__dirname,'./views/login.html')
    res.sendFile(loginHTMLPath);
});

app.get('/signin', (req, res) => {
    let loginHTMLPath = path.join(__dirname,'./views/signin.html')
    res.sendFile(loginHTMLPath);
});

app.get('/detalleProducto', (req, res) => {
    let detalleProductoHTMLPath = (path.join(__dirname, './views/detalleProducto.html'))
    res.sendFile(detalleProductoHTMLPath);
  });


const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

const mainRouter = require('./routes/mainRoutes.js')

app.use(express.static('public'));

app.get('/', );

app.use(mainRouter)


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

app.listen(PORT, () => {console.log(`Servidor escuchando puerto ${PORT} 🚀`)});

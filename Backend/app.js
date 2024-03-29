const express = require('express');
const path = require('path');
let session = require('express-session');
const methodOverride = require('method-override');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const PORT = process.env.PORT || 5001;

const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(methodOverride("_method"));
app.use(express.static('public'));
app.use(session({
    secret: 'Me gusta la bandeja paisa, mi mujer y la plata, no más!!!🌶',
    resave: false,
    saveUninitialized: false
}));
app.use(cookieParser());
// const corsOptions = {
//     origin: 'http://localhost:3000/*', // Reemplaza con el origen de tu cliente
//     methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
//     credentials: true, // Habilita las cookies y cabeceras de autorización (si las usas)
// };
app.use(cors());

app.set('view engine', 'ejs');
app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/user'),
    path.join(__dirname, './views/cart')
]);



const mainRouter = require('./routes/mainRoutes.js');
const userRouter = require('./routes/userRoutes.js');
const productRouter = require('./routes/productRoutes.js');
const cartRouter = require('./routes/cartRoutes.js');
const apiProductRouter = require('./routes/api/productRoutes.js');
const apiUserRouter = require('./routes/api/userRoutes.js');
const apiCartRouter = require('./routes/api/cartRoutes.js');
const recuerdameMiddleware = require('./middlewares/recuerdameMiddleware.js')


app.use(mainRouter);
app.use(userRouter); // app.use('/user', userRouter);
app.use(productRouter);
app.use(cartRouter);
app.use(apiProductRouter);
app.use(apiUserRouter);
app.use(apiCartRouter);
app.use(recuerdameMiddleware);

app.use((req, res, next) => {
    res.status(404).render("./not-found")
});

app.listen(PORT, () => { console.log(`Servidor escuchando puerto http://localhost:${PORT} 🚀`) });
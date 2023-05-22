const express = require('express');
const path = require('path');
const methodOverride = require('method-override')
const PORT = process.env.PORT || 3001;

const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(methodOverride("_method"));

app.set('view engine', 'ejs')

app.set('views', [
    path.join(__dirname, './views/main'),
    path.join(__dirname, './views/products'),
    path.join(__dirname, './views/user')
])

const mainRouter = require('./routes/mainRoutes.js')
const userRouter = require('./routes/userRoutes.js')
const productRouter = require('./routes/productRoutes.js')

app.use(express.static('public'));

app.use(mainRouter)
app.use(userRouter)
app.use(productRouter)

app.use((req, res, next) => {
    res.status(404).render("not-found")
})

app.listen(PORT, () => {console.log(`Servidor escuchando puerto http://localhost:${PORT} 🚀`)});

const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

app.set('view engine', 'ejs')

app.set('views', [
    path.join(__dirname, '/main'),
    path.join(__dirname, '/products'),
    path.join(__dirname, '/user')
])

const mainRouter = require('./routes/mainRoutes.js')
const userRouter = require('./routes/userRoutes.js')
const productRouter = require('./routes/productRoutes.js')

app.use(express.static('public'));

app.use(mainRouter)
app.use(userRouter)
app.use(productRouter)



app.listen(PORT, () => {console.log(`Servidor escuchando puerto https//:localhost:${PORT}`)});

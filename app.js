const express = require('express');
const path = require('path');
const PORT = process.env.PORT || 3001;

const app = express();

const mainRouter = require('./routes/mainRoutes.js')
const userRouter = require('./routes/userRoutes.js')
const productRouter = require('./routes/productRoutes.js')

app.use(express.static('public'));

app.use(mainRouter)
app.use(userRouter)
app.use(productRouter)



app.listen(PORT, () => {console.log(`Servidor escuchando puerto ${PORT} 🚀`)});

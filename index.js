const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const debug = require('debug')('app');

const app = express();
const port = 3001;
const productRouter = require('./src/routes/productRoutes.js');
const shoppingCartRouter = require('./src/routes/shoppingCartRoutes.js');

app.use(cors());
app.use(morgan('tiny'));
app.use('/products', productRouter);
app.use('/cart', shoppingCartRouter);

app.listen(port);
debug(`listening on port ${port}`);
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const debug = require('debug')('app');

const app = express();
const port = 3000;
const productRouter = require('./src/routes/productRoutes.js');

app.use(cors());
app.use(morgan('tiny'));
app.use('/products', productRouter);

app.get('/', (req, res) => {
    res.send('Hello World From App');
})

app.listen(port);
debug(`listening on port ${port}`);
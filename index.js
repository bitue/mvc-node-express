const express = require('express');
const config = require('./config/config');
const { databaseConnect } = require('./config/db');

// const {databaseConnect} = require('./config/db')

const app = express();
const productRouter = require('./routes/productRouter');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const PORT = config.app.port;

// all product router
app.use(productRouter);

app.use((err, req, res, next) => {
    res.send(err).status(500);
});
app.listen(PORT, async () => {
    console.log('server connected');
    await databaseConnect();
});

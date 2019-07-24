const express = require('express');
const { MongoClient } = require('mongodb');
const debug = require('debug')('app:productRoutes');
const productRouterMongo = express.Router();

productRouterMongo.route('/')
.get((req, res) => {
    const url = 'mongodb://localhost:27017';
    const dbName = 'data';

    (async function mongo() {
        let client;
        
        try {
            client = await MongoClient.connect(url);

            const db = client.db(dbName);
            const collection = await db.collection('products');
            const products = await collection.find().toArray();
            products.forEach(convertId);
            
            res.json(products);        
        } catch(err) {
            debug(err.stack);
            res.status(500).send(`The database threw an error: ${err}`);        
        }
        client.close();
    }());
})

const convertId = (object) => {
    object.id = object._id;
    delete object._id;
    return object;
}

module.exports = productRouterMongo;

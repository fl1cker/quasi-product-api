const express = require('express');
const debug = require('debug')('app:productRoutes');
const productRouterAWS = express.Router();
var path = require('path');
const AWS = require('aws-sdk');

const pathToJson = path.resolve(__dirname, '../../config.json');
AWS.config.loadFromPath(pathToJson);

productRouterAWS.route('/')
.get((req, res) => {
    const docClient = new AWS.DynamoDB.DocumentClient();

    const params = {
        TableName: 'Product',
    }
    debug('Scanning Product Table');

    docClient.scan(params, onScan);
    
    function onScan(err, data) {
        if(err) {
            res.status(500).send(`Unable to scan the table.  Error JSON: ${JSON.stringify(err, null, 2)}`);
        } else {
            debug('Scan Succeeded');

            if (typeof data.LastEvaluatedKey != "undefined") {
                console.log('Scanning for more ...');
                params.ExclusiveStartKey = data.LastEvaluatedKey;
                docClient.scan(params, onScan)
            } else {
                res.json(data.Items);
            }
        }
    }
})

module.exports = productRouterAWS;

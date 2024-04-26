const express = require('express');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
var cors = require('cors')
const { MongoClient } = require('mongodb');

dotenv.config();

const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'passop';


(async () => {
    try {
        await client.connect();
        const db = client.db(dbName);
        const app = express();
        const port = 8080;

        // Middleware for parsing JSON bodies
        app.use(cors())
        app.use(bodyParser.json());

        // Route to fetch documents
        app.get('/', async (req, res) => {
          
            const collection = db.collection('password');
            const findResult = await collection.find({}).toArray();
            res.json(findResult);
        });


        // save a password
        app.post('/', async (req, res) => {
            const password=req.body
            const db=client.db(dbName)
            
            const collection = db.collection('password');
            const findResult = await collection.insertOne(password)
            res.send({success:true,result:findResult});
        });
        // delete a password by id 
        app.delete('/', async (req, res) => {
            const password=req.body
            const db=client.db(dbName)
            const collection = db.collection('password');
            const findResult = await collection.deleteOne(password)
            res.send({success:true,result:findResult});
        });


        app.listen(port, () => {
            console.log(`Server running on port ${port}`);
        });
    } catch (error) {
        console.error("Error occurred:", error);
    }
})();

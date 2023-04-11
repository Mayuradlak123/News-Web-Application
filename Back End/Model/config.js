const MongoClient = require('mongodb').MongoClient;
const dotenv = require('dotenv').config()

const url = 'mongodb://localhost:27017';
const database = 'Newsapp';
console.log(url);

const client = new MongoClient(url);

async function getData() {
    try {
        var result = await client.connect();
        var DB = result.db(database);
        let collection = DB.collection('user');
        console.log(collection.find().toArray());
        console.log("Connected to Database ");
    } catch (er) {
        console.log("Failed to connect to databse ");
    }
}
getData();
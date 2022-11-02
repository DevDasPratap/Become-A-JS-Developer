//using mongodb npm
 const {MongoClient} = require('mongodb');
 // or
//  const MongoClient = require('mongodb').MongoClient;

//connect with db
const url='mongodb://localhost:27017';
const client = new MongoClient(url)  //new => create object
const databaseName = 'clg';
async function getData() {
    const result = await client.connect();
    const db = result.db(databaseName); //connect with database
    const collection = db.collection("students") //connect with db collections
    const response = await collection.find({}).toArray();
    console.log(response);
}
getData();
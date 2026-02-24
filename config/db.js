import { MongoClient } from 'mongodb';

const url = "mongodb+srv://klef:klef123@cluster0.ecszaax.mongodb.net/?appName=Cluster0";
const dbname = "fedf";

const client = new MongoClient(url);

let db;

export async function connectDB(){
    if(!db){
        await client.connect();
        db = client.db(dbname);
    }
    return db;
}
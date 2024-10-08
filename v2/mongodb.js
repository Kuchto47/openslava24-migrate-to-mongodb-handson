require('dotenv').config();
const { MongoClient, ServerApiVersion } = require("mongodb");

const uri = process.env.MONGODB_URI;
const client = new MongoClient(uri, {
    serverApi: {
        version: ServerApiVersion.v1,
        strict: true,
        deprecationErrors: true,
    }
});

let dbConnection;

async function connectDB() {
    if (!dbConnection) {
        try {
            // Connect to the MongoDB server
            await client.connect();
            dbConnection = client.db("northwind");
            console.log("Connected to MongoDB");
        } catch (error) {
            console.error("Failed to connect to MongoDB", error);
            throw error;
        }
    }
    return dbConnection;
}

async function getDB() {
    if (!dbConnection) {
        await connectDB();
    }
    return dbConnection;
}

module.exports = { connectDB, getDB };

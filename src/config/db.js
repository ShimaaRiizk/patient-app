const mongoose = require("mongoose");

const connectDB = async () => {
    try {
    const uri = "mongodb+srv://ydshyma20_db_user:v9vYQVQV1PSwnb8N@cluster0.xbm5skb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

        await mongoose.connect(uri, {
            useNewUrlParser: true,
            useUnifiedTopology: true
        });
        console.log("Successfully connected to MongoDB Atlas!");
    } catch (error) {
        console.error("MongoDB connection failed:", error.message);
        process.exit(1);
    }
};

module.exports = connectDB;
/*

const { MongoClient, ServerApiVersion } = require('mongodb');
const uri = "mongodb+srv://ydshyma20_db_user:v9vYQVQV1PSwnb8N@cluster0.xbm5skb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Successfully connected to MongoDB Atlas!");
  } catch (error) {
    console.error("Connection error:", error);
  } finally {
    await client.close();
  }
}
run();
*/
/*const { MongoClient, ServerApiVersion } = require('mongodb');

const uri = "mongodb+srv://ydshyma20_db_user:v9vYQVQV1PSwnb8N@cluster0.xbm5skb.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  }
});

async function run() {
  try {
    await client.connect();
    console.log("Successfully connected to MongoDB Atlas!");
    
    // Test DB operation
    const db = client.db("testdb");
    const collection = db.collection("test");
    await collection.insertOne({ message: "Hello MongoDB" });
    console.log("Inserted document successfully!");
    
  } catch (error) {
    console.error("Connection error:", error);
  }
}

run();
*/
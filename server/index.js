import "dotenv/config";
import { MongoClient, ServerApiVersion } from "mongodb";
const uri = `mongodb+srv://admin:${process.env.MONGODB_PASSWORD}@webbal.yrhkpgv.mongodb.net/?retryWrites=true&w=majority`;

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    await client.connect();
    await client.db("admin").command({ ping: 1 });
    console.log("Connected to MongoDB!");
  } finally {
    await client.close();
  }
}
run().catch(console.dir);

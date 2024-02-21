import "dotenv/config";
import express from "express";
import { MongoClient, ServerApiVersion } from "mongodb";

const app = express();
// eslint-disable-next-line no-undef
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

// eslint-disable-next-line no-undef
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

    // Get DB and collections
    const database = client.db("webbal");
    const categories = database.collection("categories");
    const subcategories = database.collection("subcategories");
    const item = database.collection("item");

    // Filter
    const query = { catId: 1 };

    // Orders and display
    const categoriesByName = {
      sort: { catId: 1 },
      projection: { _id: 0, catName: 1 },
    };

    // Execute
    const fetchAllCategories = categories.find({}, categoriesByName);

    for await (const doc of fetchAllCategories) {
      console.dir(doc);
    }
  } finally {
    await client.close();
  }
}

run().catch(console.dir);

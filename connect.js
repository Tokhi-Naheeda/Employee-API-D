import mongoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

export async function connect() {
  const MONGODB_URL = process.env.MONGODB_URL;
  if (MONGODB_URL) {
    await mongoose.connect(MONGODB_URL);
  } else {
    throw new Error("Error: MONGODB_URL not found");
  }
}


    /*
    "test": "echo \"Error: no test specified\" && exit 1",
    "start": "node server.js",
    "seed": "node seed.js"
    */
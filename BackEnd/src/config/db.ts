import mongoose from "mongoose";
import { exit } from "node:process";
import color from "colors";

//Create connection to MongoDB through MongoAtlas URL and mongoose using enviroment variables
const connectDB = async () => {
  try {
    const db = await mongoose.connect(process.env.DATABASE_URL);
    const url = `${db.connection.host}:${db.connection.port}`;
    console.log(color.cyan.bold(`MongoDB connected on: ${url}`));
  } catch (error) {
    console.log(`error: ${error.message}`);
    exit(1);
  }
};

export default connectDB;

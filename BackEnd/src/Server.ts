import express from "express";
import router from "./Router";
import dotenv from "dotenv";
import connectDB from "./config/db";
import cors, { CorsOptions } from "cors";

//Create express server
const server = express();

//CORS
const corsOptions: CorsOptions = {
  origin: function (origin, callback) {
    if (origin === "http://localhost:5173") {
      callback(null, true);
    } else {
      callback(new Error("Error CORS"));
    }
  },
};

server.use(cors(corsOptions));

//Availability for enviroment variables
dotenv.config();

//Call MongoDB connection from db.ts archive
connectDB();

//Read data
server.use(express.json());

//Use Express server and redirect to router
server.use("/portafolio", router);

export default server;

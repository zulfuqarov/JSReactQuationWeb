import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import mongoose from "mongoose";
import cors from "cors";

// import router start
import AllRouter from "./Route/AllRoutes.js";
// import router end

dotenv.config();
const Port = 5555;
const app = express();

app.use(bodyParser.json());
app.use(cors());


const ConnectingDb = async () => {
  try {
    await mongoose.connect(process.env.CONNECTING_MONGO_DB);
    console.log("MongoDB Connecting :)");
  } catch (error) {
    console.log(error);
  }
};

app.use("/api", AllRouter);

app.listen(Port, async () => {
  try {
    await ConnectingDb();
    console.log(`http://localhost:${Port}`);
  } catch (error) {
    console.log(error);
    console.log("baglantida problem bash verdi");
  }
});

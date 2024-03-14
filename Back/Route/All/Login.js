import express from "express";

const route = express.Router();

route.get("/", (req, res) => {
  res.send("Hello World!");
});
route.get("/get2", (req, res) => {
  res.send("Hello World2!");
});

export default route;

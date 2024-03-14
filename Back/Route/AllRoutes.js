import express from "express";

const route = express.Router();

// import Routing start
import Login from "./All/Login.js";
import Quations from "./All/Quations.js";
// import Routing end

route.use("/Login", Login);
route.use("/Quations", Quations);

export default route;

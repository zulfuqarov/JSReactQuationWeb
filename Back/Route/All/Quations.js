import QuationModel from "../../Model/QuationModel.js";
import express from "express";

const route = express.Router();

route.post("/AddQuations", async (req, res) => {
  const body = req.body;
  try {
    const NewQuations = await QuationModel(body);
    await NewQuations.save();
    res.status(200).json(NewQuations);
  } catch (error) {
    res.status(400).json({ message: "serverde xet bash verdi", error });
  }
});

route.get("/", async (req, res) => {
  try {
    const Quations = await QuationModel.find();
    res.status(200).json(Quations);
  } catch (error) {
    res.status(400).json({ message: "serverde xet bash verdi", error });
  }
});

export default route;

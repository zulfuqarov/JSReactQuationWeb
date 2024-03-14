import mongoose from "mongoose";

const Quations = mongoose.Schema({
  category: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  correct_answer: {
    type: String,
    required: true,
  },
  incorrect_answers: [
    {
      type: String,
      required: true,
    },
  ],
});

export default mongoose.model("Quations", Quations);

import mongoose from "mongoose";

const schema = mongoose.Schema({
  created: { type: Date, default: Date.now },
  name: String,
  description: String,
  userId: mongoose.Schema.Types.ObjectId
});

export default mongoose.model("Task", schema);

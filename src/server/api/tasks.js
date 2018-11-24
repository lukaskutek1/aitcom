import express from "express";

// models
import Tasks from "../model/Tasks";

// utilities
import handler from "server/utils/handler";

const router = express.Router();

router.get("/", async (req, res) => {
  const tasks = await Tasks.find({ userId: req.user._id }); // .find({userId: req.user._id, name:{$ne: ''}})

  res.json({ tasks });
});

router.post("/", async (req, res) => {
  const { name, description, userId } = req.body;

  const task = await Tasks.create({ name, description, userId });

  res.json({ task });
});

export default router;

import express from "express";

// handlers
import users from "./users";
import upload from "./upload";
import tasks from "./tasks";

const router = express.Router();

router.use("/upload", upload);
router.use("/users", users);
router.use("/tasks", tasks);

export default router;

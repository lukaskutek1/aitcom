import express from "express";

// handlers
import users from "./users";
import upload from "./upload";

const router = express.Router();

router.use("/upload", upload);
router.use("/users", users);

export default router;

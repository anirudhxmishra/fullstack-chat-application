import express from "express";
import { protectRoute } from "../middleware/auth.middleware.js";
import { getUsersForSidebar, sendMessage, getMessages } from "../controllers/message.controller.js";

const router = express.Router();

router.get("/users", protectRoute, getUsersForSidebar);
router.get("/chat/:id", protectRoute, getMessages);  // <-- changed this
router.post("/send/:id", protectRoute, sendMessage);

export default router;

import express from "express"
import { protecteRoute } from "../middleware/auth.middileware.js";
import { getMessages, getUserForSidebar, sendMessage } from "../contorllers/message.controller.js";

const router=express.Router();

router.get("/users",protecteRoute,getUserForSidebar)
router.get("/:id",protecteRoute,getMessages)

router.post("/send/:id",protecteRoute,sendMessage)

export default router;
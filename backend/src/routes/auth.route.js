import express from "express";
import { checkAuth, login, logout, signup, updateProfile } from "../contorllers/auth.controller.js";
import { protecteRoute } from "../middleware/auth.middileware.js";

const router=express.Router()

router.post("/signup", signup);
router.post("/login", login);
router.post("/logout", logout);

router.put("/update-profile", protecteRoute, updateProfile)

router.get("/check", protecteRoute, checkAuth)

export default router
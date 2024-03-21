import express from "express";
import { Register, Login, Logout } from "../controllers/auth.js";
import { check } from "express-validator";
import Validate from "../middleware/validate.js";

const router = express.Router();

//Register route -- POST request
router.route("/register").post(Register);

// Login route == POST request
router.post("/login", Login);

// Logout route ==
router.get("/logout", Logout);
export default router;

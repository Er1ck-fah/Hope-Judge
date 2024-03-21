import express from "express";
import {
  Register,
  Login,
  Logout,
  UpdatePassword,
} from "../controllers/auth.js";

const router = express.Router();

//Register route -- POST request
router.route("/register").post(Register);

// Login route == POST request
router.post("/login", Login);

// Update Password == PUT request

router.put("/updatePassword", UpdatePassword);

// Logout route ==
router.get("/logout", Logout);
export default router;

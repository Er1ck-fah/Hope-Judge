import express from "express"; // import the express module
import { Verify, VerifyRole } from "../middleware/verify.js";
import Auth from "./auth.js";
import Home from "./home.js";
import Board from "./board.js";
import Mobile from "./mobile.js";
import Panel from "./panel.js";

const app = express(); // Create an app object

// home route with the get method and a handler
app.get("/api", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our API homepage!",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});

app.get("/api/admin", Verify, VerifyRole, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the Admin portal!",
  });
});

app.get("/api/user", Verify, (req, res) => {
  res.status(200).json({
    status: "success",
    message: "Welcome to the your Dashboard!",
  });
});

app.use("/api/auth", Auth);
app.use("/api/home", Home);
app.use("/api/board", Board);
app.use("/api/mobile", Mobile);
app.use("/api/dashboard", Panel);

export default app;

import express from "express"; // import the express module
import Auth from "./auth.js";
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

app.use("/api/auth", Auth);

export default app;

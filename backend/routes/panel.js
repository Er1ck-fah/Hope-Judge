import express from "express";
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.status(200).json({
      status: "success",
      data: [],
      message: "Welcome to our Dashboard!",
    });
  } catch (err) {
    res.status(500).json({
      status: "error",
      message: "Internal Server Error",
    });
  }
});
export default router;

import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import { mongoose } from "mongoose";
import { PORT, URI } from "./libs/config.js";
import App from "./routes/index.js";

// === 1- CREATE SERVER ===
const server = express();

// CONFIGURE HEADER INFORMATION
// Allow request from any source. In real production, this should be limited to allowed origins only
server.use(cors);
server.disable("x-powered-by"); //Reduce fingerprinting
server.use(cookieParser());
server.use(express.urlencoded({ extended: false }));
server.use(express.json);

// === 2 - CONNECT DATABASE ===
// Set up mongoose's promise to global promise

mongoose.promise = global.Promise;
mongoose.set("strictQuery", false);
mongoose
  .connect(URI)
  .then(console.log("Connected to database"))
  .catch((err) => console.log(err));

// === 3 - CONFIGURE ROUTES ===
// Connect Main route to server
server.use(App);

// === 4 - START UP SERVER ===
server.listen(PORT, function () {
  console.log(`Listening on URL http://localhost:${PORT}`);
});

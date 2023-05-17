const express = require("express");
const app = express();
const router = express.Router();

const mealsRouter = require("./api/meals");
const cors = require("cors");
require("dotenv").config(); // Load environment variables from .env file
const port = process.env.PORT || 3000;

// Enable cross-origin resource sharing for all routes
app.use(cors());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Define routes for your app
app.get("/", (req, res) => {
  res.json({ message: "Hello World" }); // Add your code here
});

router.use("/meals", mealsRouter);

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// Start the server
app.listen(port, () => {
  console.log("Server listening on port 3000");
});

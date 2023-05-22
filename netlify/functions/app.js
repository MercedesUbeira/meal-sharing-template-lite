const express = require("express");
const app = express();
const router = express.Router();

const mealsRouter = require("./api/meals");
const reservationsRouter = require("./api/reservations");

const cors = require("cors");
const knex = require("./database");
require("dotenv").config(); // Load environment variables from .env file
const port = process.env.API_PORT || 3074;

// Middleware
app.use(express.json());
app.use(cors());

// Routes
router.use("/meals", mealsRouter);
router.use("/reservations", reservationsRouter);

// Mount the router
app.use("/api", router);

// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

// Export the app for Netlify Functions
module.exports = app;

const express = require("express");
const app = express();
const router = express.Router();

const mealsRouter = require("./api/meals");
const cors = require("cors");
const knex = require("./database");
require("dotenv").config(); // Load environment variables from .env file
const port = process.env.PORT || 3000;

// Enable cross-origin resource sharing for all routes
app.use(cors());
// Parse URL-encoded bodies (as sent by HTML forms)
app.use(express.urlencoded({ extended: true }));
// Parse JSON bodies (as sent by API clients)
app.use(express.json());

// Add routes, starting with /meals
router.use("/meals", mealsRouter);

// Define routes for your app
app.get("/future-meals", async (req, res) => {
  const now = new Date();
  try {
    const query = knex.from("Meal").select("when").where("when", ">", now);
    const results = await query;
    res.json(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/past-meals", async (req, res) => {
  const now = new Date();
  try {
    const query = knex.from("Meal").select("when").where("when", "<", now);
    const results = await query;
    res.json(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/all-meals", async (req, res) => {
  try {
    const query = knex.from("Meal").select("id").orderBy("id", "asc");
    const results = await query;
    res.json(results);
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/first-meal", async (req, res) => {
  try {
    const query = knex.from("Meal").select("id").orderBy("id", "asc").first();
    const results = await query;
    if (results) {
      res.json(results);
    } else {
      res.status(404).send("Couldn't get first-meal");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

app.get("/last-meal", async (req, res) => {
  try {
    const query = knex.from("Meal").select("id").orderBy("id", "desc").first();
    const results = await query;
    if (results) {
      res.json(results);
    } else {
      res.status(404).send("Couldn't get last-meal");
    }
  } catch (error) {
    res.status(500).send(error);
  }
});

if (process.env.API_PATH) {
  app.use(process.env.API_PATH, router);
} else {
  throw "API_PATH is not set. Remember to set it in your .env file";
}

// Start the server
app.listen(port, () => {
  console.log("Server listening on port 3000");
});

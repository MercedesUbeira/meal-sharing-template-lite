const express = require("express");
const mealsRouter = express.Router();
const knex = require("../database");

function formatDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  return `${year}-${month}-${day} ${hours}:${minutes}:${seconds}`;
}


//NodeJS. W2 -  GET - Returns the meal by ID -- WORKS
mealsRouter.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const meal = await knex("Meal").where({ id }).first();
    if (!meal) {
      res.status(404).json({ error: `Meal with ID ${id} not found` });
    }
    res.status(201).json(meal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


mealsRouter.get("/", async (req, res) => {
  try {
    const { maxPrice, title, dateAfter, dateBefore, limit, sortKey, sortDir } = req.query;
    let mealsQuery = knex("Meal");

    if (maxPrice) { // maxPrice (Returns all meals that are cheaper than maxPrice)
      mealsQuery.where("price", "<=", maxPrice);
    }

    if (title) { // title (Returns all meals that partially match the given title.)
      mealsQuery.where("title", "like", `%${title}%`);
    }

    if (dateAfter) { // dateAfter (Returns all meals where the date for when is after the given date.)
      mealsQuery.where("when", ">", dateAfter);
    }

    if (dateBefore) { // dateBefore (Returns all meals where the date for when is before the given date.)
      mealsQuery.where("when", "<", dateBefore);
    }

    if (limit) { // limit (Returns the given number of meals.)
      mealsQuery.limit(limit);
    }

    if (sortKey) { // sortKey (Returns all meals sorted by the given key. Allows when, max_reservations and price as keys. Default sorting order is asc(ending).)
      let direction = sortDir === "desc" ? "desc" : "asc";
      mealsQuery.orderBy(sortKey, direction);
    }

    const meals = await mealsQuery.select();
    res.json(meals);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//NodeJS. W2 - POST -- Adds a new meal to the database -- WORKS
mealsRouter.post("/", async (req, res) => {
  try {
    const newMeal = req.body;
    const whenString = newMeal.when
    const createdDateString = newMeal.created_date
    newMeal.when = formatDate(new Date(whenString))
    newMeal.created_date = formatDate(new Date(createdDateString))
    console.log(newMeal)
    const insertedMeal = await knex("Meal").insert(newMeal);
    res.status(201).json(insertedMeal);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//NodeJS. W2 - PUT -- Updates meal by ID -- WORKS -- Note fo myself: check for a simple way to write this dateString part
mealsRouter.put("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const updatedMeal = req.body
    const dateString = updatedMeal['when']

    updatedMeal['when'] = Date.parse(dateString)
    console.log(updatedMeal)
    const dateString2 = updatedMeal['created_date']
    updatedMeal['created_date'] = Date.parse(dateString2)
    console.log(updatedMeal)
    const meal = await knex("Meal").where({ id }).update(updatedMeal);
    if (!meal) {
      res.status(404).json({ error: `Meal with ID ${id} not found` });
    } else {
      res.json(meal);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

//NodeJS. W2 - DELETE - Deletes a meal by id -- WORKS
mealsRouter.delete("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    const meal = await knex("Meal").where({ id }).del();
    if (!meal) {
      res.status(404).json({ error: `Meal with ID ${id} not found` });
    } else {
      res.json(meal);
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});


module.exports = mealsRouter;

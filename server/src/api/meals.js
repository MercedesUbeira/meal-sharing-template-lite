const express = require("express");
const router = express.Router();

router.get("/", async (request, response) => {
  try {
    // knex syntax for selecting things. Look up the documentation for knex for further info
    const titles = { meal: "dosa with samar", price: 50 }; //add your knex operations here
    response.json(titles);
  } catch (error) {
    throw error;
  }
});

module.exports = router;

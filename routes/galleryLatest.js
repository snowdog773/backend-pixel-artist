const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.get("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `SELECT Name, Data FROM artwork
      ORDER BY Timestamp DESC
      LIMIT 5,5`
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `SELECT Name FROM artwork WHERE UserID = ${req.body.userId}`
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

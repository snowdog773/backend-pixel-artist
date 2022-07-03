const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `SELECT Data FROM artwork WHERE Name=? AND UserID=?`,
      [req.body.name, req.body.userId]
    );
    res.send({ status: 1, results });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

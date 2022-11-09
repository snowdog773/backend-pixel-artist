const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `DELETE FROM artwork WHERE name=? AND UserID=?`,
      [req.body.pictureName, req.body.userId]
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

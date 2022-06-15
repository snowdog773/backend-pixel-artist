const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `DELETE FROM artwork WHERE name='${req.body.pictureName}' AND UserID='${req.body.usedId}'`
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `INSERT INTO userdata (Username, Password) 
      VALUES (?,?);`,
      [req.body.username, req.body.password]
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

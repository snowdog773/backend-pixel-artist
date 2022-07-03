const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const timestamp = Date.now();
    const results = await asyncMySQL(
      `INSERT INTO artwork (userId, Name, Data, Last_edit) 
          VALUES (?,?,?,?);`,
      [req.body.userId, req.body.pictureName, req.body.pictureData, timestamp]
    );
    res.send({ status: 1 });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `UPDATE artwork SET Data='${
        req.body.pictureData
      }', Last_edit='${Date.now()}'
       WHERE Name='${req.body.pictureName}' AND userID='${req.body.userId}'`
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

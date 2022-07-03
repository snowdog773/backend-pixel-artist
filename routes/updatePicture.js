const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const timestamp = Date.now();
    const results = await asyncMySQL(
      `UPDATE artwork SET Data=?, Last_edit=?
      
       WHERE Name=? AND userID=?`,
      [req.body.pictureData, timestamp, req.body.pictureName, req.body.userId]
    );
    //use NOW() in SQL
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

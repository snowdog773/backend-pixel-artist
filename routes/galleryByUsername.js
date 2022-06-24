const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.get("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `SELECT Name, Data, userID, Votes, artwork.ID, userdata.Username FROM artwork
      LEFT JOIN userdata ON artwork.userID = userdata.ID
      WHERE userdata.Username = '${req.query.username}'
      ORDER BY artwork.Timestamp DESC
      LIMIT 100`
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

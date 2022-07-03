const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.get("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `SELECT Name, Data, userID, Votes, artwork.ID, userdata.Username FROM artwork
      LEFT JOIN userdata ON artwork.userID = userdata.ID
      WHERE userdata.Username =?
      ORDER BY artwork.Last_edit DESC
      LIMIT 100`,
      [req.query.username]
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

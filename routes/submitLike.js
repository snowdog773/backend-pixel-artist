const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.get("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `UPDATE artwork SET Votes = Votes + 1
      WHERE ID =?
      `,
      [req.query.pictureID]
    );
    await asyncMySQL(
      `INSERT INTO user_likes (UserID, ArtworkID)
      VALUES (?,?)`,
      [req.query.userID, req.query.pictureID]
    );
    res.send(results);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

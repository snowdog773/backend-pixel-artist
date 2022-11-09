const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `SELECT userdata.ID, userdata.Username, userdata.Password, artwork.Name, user_likes.ArtworkID FROM userdata
            LEFT JOIN artwork ON userdata.ID = artwork.userID
            LEFT JOIN user_likes ON userdata.ID = user_likes.UserID
            WHERE Username=?;`,
      [req.body.username]
    );
    !results[0]
      ? res.send({ status: 0, error: "username not found" })
      : req.body.username === results[0].Username &&
        req.body.password === results[0].Password
      ? res.send({
          status: 1,
          userId: results[0].ID,
          name: results.map((e) => e.Name),
          likes: results.map((e) => e.ArtworkID),
        })
      : //   generate JWT

        res.send({ status: 0, error: "password incorrect" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

// `WITH a AS (
//   SELECT userdata.ID, Username, Password, artwork.Name FROM userdata
//   LEFT JOIN artwork ON userdata.ID = artwork.userID WHERE Username='${req.body.username}' )
//   , b AS (
//    SELECT userdata.ID, user_likes.ArtworkID FROM userdata
//   LEFT JOIN user_likes ON userdata.ID = user_likes.UserID
//   WHERE Username='${req.body.username}' )
//   SELECT * FROM a JOIN b USING (ID);`

// `SELECT userdata.ID, userdata.Username, userdata.Password, artwork.Name, user_likes.ArtworkID FROM userdata
//       LEFT JOIN artwork ON userdata.ID = artwork.userID
//       LEFT JOIN user_likes ON userdata.ID = user_likes.UserID
//       WHERE Username=?;`

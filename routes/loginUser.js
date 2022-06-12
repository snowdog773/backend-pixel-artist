const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `SELECT Username, Password, ID FROM userdata WHERE Username='${req.body.username}';`
    );
    !results[0]
      ? res.send({ status: 0, error: "username not found" })
      : req.body.username === results[0].Username &&
        req.body.password === results[0].Password
      ? res.send({ status: 1, userId: results[0].ID })
      : //   generate JWT
        // populate list of saved work
        res.send({ status: 0, error: "password incorrect" });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

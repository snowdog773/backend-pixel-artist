const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `INSERT INTO artwork (userId, Name, Data) 
          VALUES ('${req.body.userId}',
                  '${req.body.pictureName}',
                   '${req.body.pictureData}')`
    );
    res.send({ status: 1 });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

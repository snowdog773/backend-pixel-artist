const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", async (req, res) => {
  try {
    const results = await asyncMySQL(
      `INSERT userdata (Username, Password) 
          VALUES ('${req.body.username}',
                  
                   '${req.body.password}')`
    );
    res.send({ status: 1 });
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

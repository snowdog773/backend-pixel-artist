const express = require("express");
const app = express.Router();
const asyncMySQL = require("../utils/connection");

app.post("/", (req, res) => {
  try {
    const results = asyncMySQL(
      `INSERT IGNORE userdata (Username, Password) 
          VALUES ('${req.body.username}',
                  
                   '${req.body.password}')`
    );
    res.send(res);
  } catch (error) {
    res.send(error);
  }
});

module.exports = app;

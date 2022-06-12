const express = require("express");
const cors = require("cors");
const app = express();
// const middleware = require("./middleware/general");

app.use(express.json());
app.use(cors());
// // app.use(middleware.addDataToRequest);
// app.use("/get", require("./routes/getUsers"));
app.use("/add", require("./routes/addUser"));
app.use("/login", require("./routes/loginUser"));
app.use("/savePicture", require("./routes/savePicture"));

app.listen(process.env.PORT || 6001, () => {
  console.log("server running");
});

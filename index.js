const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/add", require("./routes/addUser"));
app.use("/login", require("./routes/loginUser"));
app.use("/savePicture", require("./routes/savePicture"));
app.use("/loadPicture", require("./routes/loadPicture"));
app.use("/returnImage", require("./routes/returnImage"));

app.listen(process.env.PORT || 6001, () => {
  console.log("server running");
});

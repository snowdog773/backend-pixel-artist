const express = require("express");
const cors = require("cors");
const app = express();
// const middleware = require("./middleware/general");

app.use(express.json());
app.use(cors());
// // app.use(middleware.addDataToRequest);
// app.use("/get", require("./routes/getUsers"));
app.use("/add", require("./routes/addUser"));
// app.use("/delete", require("./routes/deleteUser"));
// app.use("/update", require("./routes/updateUser"));

app.listen(process.env.PORT || 6001, () => {
  console.log("server running");
});

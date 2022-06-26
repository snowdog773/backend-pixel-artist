const express = require("express");
const cors = require("cors");
const app = express();

app.use(express.json());
app.use(cors());

app.use("/add", require("./routes/addUser"));
app.use("/login", require("./routes/loginUser"));
app.use("/savePicture", require("./routes/savePicture"));
app.use("/updatePicture", require("./routes/updatePicture"));
app.use("/returnImage", require("./routes/returnImage"));
app.use("/deletePicture", require("./routes/deletePicture"));
app.use("/galleryLatest", require("./routes/galleryLatest"));
app.use("/galleryOldest", require("./routes/galleryOldest"));
app.use("/galleryMostVotes", require("./routes/galleryMostVotes"));
app.use("/galleryByUsername", require("./routes/galleryByUsername"));
app.use("/submitLike", require("./routes/submitLike"));

app.listen(process.env.PORT || 6001, () => {
  console.log("server running");
});

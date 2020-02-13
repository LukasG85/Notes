const express = require("express");
require("dotenv").config();
const mongoose = require("mongoose");
mongoose.connect(
  `mongodb+srv://${process.env.USER}:${process.env.PASSWORD}@cluster0-uwzkt.mongodb.net/test?retryWrites=true&w=majority`,
  { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false },
  function(error) {
    if (error) console.log(error);

    console.log("connection successful");
  }
);

const cors = require("cors");
const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("/api", require("./routes/index"));

const port = process.env.PORT | 80;

app.listen(port, () => {
  console.log(`app running on port ${port}`);
});

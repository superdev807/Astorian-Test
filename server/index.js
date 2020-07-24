const createError = require("http-errors");
const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");
const urlManageRoute = require("./routes");
const cors = require("cors");

const app = express();

app.use(logger("dev"));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cors());

const models = require("./models");
models.sequelize
  .sync()
  .then(function () {
    console.log("Database connection is fine");
  })
  .catch(function (error) {
    console.log(error, "Something went wrong with the Database");
  });

app.use("/", urlManageRoute);
const port = parseInt(process.env.PORT, 10) || 8000;
app.listen(port, () => console.log(`Server up and running on port ${port}`));

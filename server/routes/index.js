const { validateUrlMap } = require("../middlewares/check-valid-urlmap");
const urlmanage = require("../controllers/urlmanage");
const express = require("express");
const router = express.Router();

router.get("/", (req, res) =>
  res.status(200).send({
    message: "Welcome to the API",
  })
);

router.post("/store", validateUrlMap, urlmanage.create);

module.exports = router;

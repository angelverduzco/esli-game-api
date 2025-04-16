let router = require("express").Router();

const highscores = require("./highscores.js");

router.use("/highscores", highscores);

module.exports = router;

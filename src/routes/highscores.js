const highscoresController = require("../controllers/highscores.controller.js");
const validateApiKey = require("../middlewares/auth.js");
const rateLimit = require("../middlewares/rateLimit.js");

let router = require("express").Router();

router.get("/", rateLimit, (req, res) => {
    highscoresController.getHighscores(req, res);
});

router.put("/", rateLimit, validateApiKey, (req, res) => {
    highscoresController.updateHighscore(req, res);
});

module.exports = router;

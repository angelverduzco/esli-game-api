const highscoresController = require("../controllers/highscores.controller.js");
let router = require("express").Router();

router.get("/", (req, res) => {
    highscoresController.getHighscores(req, res);
});

router.post("/", (req, res) => {
    highscoresController.createHighscore(req, res);
});

module.exports = router;

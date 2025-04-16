const highscoresController = require("../controllers/highscores.controller.js");
let router = require("express").Router();

router.get("/", (req, res) => {
    highscoresController.getHighscores(req, res);
});

router.put("/:rank", (req, res) => {
    highscoresController.updateHighscore(req, res);
});

module.exports = router;

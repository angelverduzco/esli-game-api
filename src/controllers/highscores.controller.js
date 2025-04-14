const Highscore = require("../models/highscore.model");

const getHighscores = async (req, res) => {
    try {
        const highscores = await Highscore.find()
            .sort({ points: -1 })
            .limit(10);
        res.json(highscores);
    } catch {
        res.status(400).json({ error: "Error al obtener highscores" });
    }
};

const createHighscore = async (req, res) => {
    const {
        gamertag,
        points,
        shots,
        destroyedEnemies,
        destroyedBosses,
        gameTime,
    } = req.body;

    try {
        const newHighscore = new Highscore({
            gamertag,
            points,
            shots,
            destroyedEnemies,
            destroyedBosses,
            gameTime,
        });

        await newHighscore.save();
        res.status(201).json(newHighscore);
    } catch {
        res.status(400).json({ error: "Error al crear highscore" });
    }
};

module.exports = { getHighscores, createHighscore };

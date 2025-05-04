const Highscore = require("../models/highscore.model");

const getHighscores = async (req, res) => {
    try {
        const highscores = await Highscore.find()
            .sort({ points: -1, updatedAt: -1 })
            .limit(10);
        res.status(200).json(highscores);
    } catch {
        res.status(400).json({ error: "Error al obtener highscores" });
    }
};

const updateHighscore = async (req, res) => {
    try {
        const {
            gamertag,
            points,
            shots,
            destroyedEnemies,
            destroyedBosses,
            gameTime,
        } = req.body;

        const lowestHighscore = await Highscore.findOne().sort({ points: 1 });
        if (lowestHighscore && lowestHighscore.points < points) {
            const newHighscore = {
                gamertag,
                points,
                shots,
                destroyedEnemies,
                destroyedBosses,
                gameTime,
            };

            const updatedHighscore = await Highscore.findOneAndUpdate(
                { _id: lowestHighscore._id },
                newHighscore,
                { new: true },
            );

            res.status(200).json(updatedHighscore);
        } else {
            res.status(400).json({
                message: "No se puede actualizar el highscore",
                error: "El nuevo puntaje no es mayor que el más bajo en la lista",
            });
        }
    } catch (error) {
        if (error.name === "ValidationError") {
            return res.status(400).json({
                message: "Error de validación",
                error: error.message,
            });
        }

        console.error("Error al actualizar highscore:", error);
        res.status(500).json({ mensaje: "Error del servidor" });
    }
};

module.exports = { getHighscores, updateHighscore };

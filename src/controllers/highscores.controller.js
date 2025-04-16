const Highscore = require("../models/highscore.model");

const getHighscores = async (req, res) => {
    try {
        const highscores = await Highscore.find().sort({ rank: 1 }).limit(10);
        res.status(200).json(highscores);
    } catch {
        res.status(400).json({ error: "Error al obtener highscores" });
    }
};

const updateHighscore = async (req, res) => {
    try {
        const { rank } = req.params;
        const {
            gamertag,
            points,
            shots,
            destroyedEnemies,
            destroyedBosses,
            gameTime,
        } = req.body;

        const newHighscore = await Highscore.findOneAndUpdate(
            { rank },
            {
                gamertag,
                points,
                shots,
                destroyedEnemies,
                destroyedBosses,
                gameTime,
            },
            { new: true, runValidators: true },
            // devolver el documento actualizado y validar los datos antes de actualizar
        );

        if (!newHighscore) {
            return res.status(404).json({ error: "Rank no encontrado" });
        }

        res.status(200).json({
            message: "Highscore actualizado correctamente",
            newHighscore: newHighscore,
        });
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

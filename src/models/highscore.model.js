const mongoose = require("mongoose");
const { Schema } = mongoose;

const highscoreSchema = new Schema(
    {
        gamertag: {
            type: String,
            required: true,
            unique: true,
            trim: true,
            maxlength: 4,
        },
        points: {
            type: Number,
            required: true,
            min: 0,
        },
        shots: {
            type: Number,
            required: true,
            min: 0,
        },
        destroyedEnemies: {
            type: Number,
            required: true,
            min: 0,
        },
        destroyedBosses: {
            type: Number,
            required: true,
            min: 0,
        },
        gameTime: {
            type: Number,
            required: true,
            min: 0,
        },
    },
    {
        timestamps: true,
    },
);

module.exports = mongoose.model("Highscore", highscoreSchema);

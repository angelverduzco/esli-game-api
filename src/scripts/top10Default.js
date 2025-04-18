const connectDB = require("../config/db");
const Highscoroe = require("../models/highscore.model");

const top10Highscores = [
    {
        gamertag: "ESLI",
        points: 1000,
        shots: 100,
        destroyedEnemies: 10,
        destroyedBosses: 10,
        gameTime: 10000,
    },
    {
        gamertag: "WALL",
        points: 900,
        shots: 90,
        destroyedEnemies: 9,
        destroyedBosses: 9,
        gameTime: 900,
    },
    {
        gamertag: "CARL",
        points: 800,
        shots: 80,
        destroyedEnemies: 8,
        destroyedBosses: 8,
        gameTime: 800,
    },
    {
        gamertag: "ANGE",
        points: 700,
        shots: 70,
        destroyedEnemies: 7,
        destroyedBosses: 7,
        gameTime: 700,
    },
    {
        gamertag: "N4Z1",
        points: 600,
        shots: 60,
        destroyedEnemies: 6,
        destroyedBosses: 6,
        gameTime: 600,
    },
    {
        gamertag: "LAUR",
        points: 500,
        shots: 50,
        destroyedEnemies: 5,
        destroyedBosses: 5,
        gameTime: 500,
    },
    {
        gamertag: "SEXO",
        points: 400,
        shots: 40,
        destroyedEnemies: 4,
        destroyedBosses: 4,
        gameTime: 400,
    },
    {
        gamertag: "GOTY",
        points: 300,
        shots: 30,
        destroyedEnemies: 3,
        destroyedBosses: 3,
        gameTime: 300,
    },
    {
        gamertag: "CACA",
        points: 200,
        shots: 20,
        destroyedEnemies: 2,
        destroyedBosses: 2,
        gameTime: 200,
    },
    {
        gamertag: "FUCK",
        points: 100,
        shots: 10,
        destroyedEnemies: 1,
        destroyedBosses: 1,
        gameTime: 100,
    },
];

const insertHighscores = async () => {
    try {
        await connectDB();

        // Eliminar todos los Hisghscores anteriores
        await Highscoroe.deleteMany({});
        console.log("Highscores anteriores eliminados");

        // Insertar los Highscores default
        await Highscoroe.insertMany(top10Highscores);
        console.log(`Nuevos Highscores insertados con éxito`);

        // Mostrar los Highscores
        const allHighscores = await Highscoroe.find().sort({ rank: 1 });
        console.log("Top 10 Highscores:", allHighscores);
        allHighscores.forEach((highscore, index) => {
            console.log(
                `Rank ${index + 1}: ${highscore.gamertag} - ${highscore.points} puntos`,
            );
        });
    } catch (error) {
        console.error("Error al insertar highscores:", error);
    }
};

insertHighscores();

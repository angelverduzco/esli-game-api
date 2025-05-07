const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db.js");
const dotenv = require("dotenv");
const rateLimit = require("./middlewares/rateLimit.js");

dotenv.config();
connectDB();

app.set("trust proxy", 1);

app.use(express.json());
app.use(cors());

const router = require("./routes/index.js");

app.get("/", rateLimit, (req, res) => {
    res.json({
        message:
            "Bienvenido a la API, usa /api/highscores/ para ver el Top 10 (Soy TOP 🥶🤑🥸)",
    });
});

app.use("/api", router);

module.exports = app;

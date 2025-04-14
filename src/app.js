const express = require("express");
const app = express();
const cors = require("cors");
const connectDB = require("./config/db.js");

connectDB();

app.use(express.json());
app.use(cors());

const router = require("./routes/index.js");

app.use("/api", router);

module.exports = app;

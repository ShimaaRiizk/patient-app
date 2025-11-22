const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");  // صح
require("dotenv").config();

const app = express();

// connect to database
connectDB();

// middleware
app.use(cors());
app.use(express.json());

// routes
app.use("/api/patients", require("./routes/patientRoutes"));

module.exports = app;


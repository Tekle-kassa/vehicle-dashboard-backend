const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();
const cors = require("cors");
const connectDB = require("./config/db");
const vehicleRoutes = require("./api/vehicle/routes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

// Routes
app.use("/api", vehicleRoutes);

// Start Server
const PORT = process.env.PORT || 5000;
const startServer = async () => {
  connectDB();
  app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${process.env.PORT}`);
  });
};

startServer();

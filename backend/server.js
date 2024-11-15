const express = require("express");
const app = express();
const eatStatusesRoutes = require("./routes/eatStatusesRoutes");

app.use("/api/statuses", eatStatusesRoutes);

module.exports = app;
